FROM rebble/pebble-sdk:latest AS builder

WORKDIR /workspace/Tamagotchi

COPY Tamagotchi/package.json Tamagotchi/package-lock.json ./
RUN npm ci

COPY Tamagotchi/ ./
RUN pebble build

RUN mkdir -p /dist \
    && cp build/*.pbw /dist/Tamagotchi.pbw \
    && printf '%s\n' \
      '<!doctype html>' \
      '<html lang="en">' \
      '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Tamagotchi Pebble Build</title></head>' \
      '<body><main style="font-family:system-ui,sans-serif;max-width:42rem;margin:4rem auto;padding:0 1rem;line-height:1.5">' \
      '<h1>Tamagotchi Pebble Build</h1>' \
      '<p>The latest Docker-built Pebble package is available below.</p>' \
      '<p><a href="/Tamagotchi.pbw">Download Tamagotchi.pbw</a></p>' \
      '</main></body></html>' \
      > /dist/index.html

FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /dist/ /usr/share/nginx/html/
