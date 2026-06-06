module.exports = [
  {
    "type": "heading",
    "defaultValue": "Tamagotchi Emu 4 Pebble"
  },
  {
    "type": "text",
    "defaultValue": "Created by Stefan Bauwens for the Spring 2026 Pebble App Contest."
  },
  {
    "type": "text",
    "defaultValue": "For more info check the readme at <a href='https://github.com/StefanBauwens/Tamagotchi-Emulator-Pebble'>https://github.com/StefanBauwens/Tamagotchi-Emulator-Pebble</a>"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Settings"
      },
      {
        "type": "text",
        "defaultValue": "Link to correctly formatted raw P1 ROM file"
      },
      {
        "type": "input",
        "messageKey": "ROMUrl",
        "label": "ROM URL",
        "defaultValue": "",
        "attributes": {
          "placeholder": "See github readme!"
        }
      },
      {
        "type": "text",
        "defaultValue": "(Optional) Tamagotchi Server for running in background. Leave blank if not used."
      },
      {
        "type": "input",
        "messageKey": "APIServerUrl",
        "label": "Server",
        "defaultValue": "",
        "attributes": {
          "placeholder": "e.g. http://192.168.0.100:5000"
        }
      },
      {
        "type": "toggle",
        "messageKey": "UseEmbeddedRom",
        "label": "Use embedded ROM",
        "description": "Boot from the ROM bundled in the app (faster, works without phone). Disable to use the ROM URL from the phone instead.",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "messageKey": "VibrationEnabled",
        "label": "Vibrate on attention",
        "description": "Watch vibrates when the Tama needs attention (hungry, sick, ...).",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "messageKey": "SoundEnabled",
        "label": "Sound (experimental, Pebble Time 2/Flint only)",
        "description": "Play short beeps through the watch speaker when the Tama buzzes. Off by default — may be unstable on some firmware versions.",
        "defaultValue": false
      },
      {
        "type": "slider",
        "messageKey": "SoundVolume",
        "label": "Sound volume",
        "defaultValue": 60,
        "min": 0,
        "max": 100,
        "step": 10
      },
      {
        "type": "color",
        "messageKey": "TextColor",
        "label": "Clock text",
        "defaultValue": "0xFFFFFF"
      },
      {
        "type": "toggle",
        "messageKey": "TextOutline",
        "label": "Text outline",
        "defaultValue": true
      },
      {
        "type": "color",
        "messageKey": "TextOutlineColor",
        "label": "Text outline color",
        "defaultValue": "0x000000"
      },
      {
        "type": "color",
        "messageKey": "HandsColor",
        "label": "Clock hands",
        "defaultValue": "0xFFFFFF"
      },
      {
        "type": "color",
        "messageKey": "HandsOutlineColor",
        "label": "Hands outline",
        "defaultValue": "0x000000"
      },
      {
        "type": "slider",
        "messageKey": "HandsThickness",
        "label": "Hands thickness",
        "defaultValue": 1,
        "min": 0,
        "max": 2,
        "step": 1
      },
      {
        "type": "toggle",
        "messageKey": "reset_tamagotchi",
        "label": "Reset Tamagotchi on Save",
        "defaultValue": false
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save"
  }
]
