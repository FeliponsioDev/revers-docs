# AutoSell

Minecraft plugin to automatically sell collected items or entire inventory with a single command. Includes statistics, customizable notifications, and a friendly graphical interface.

## Project Structure

The main project structure is as follows:

```
autosell/
├── pom.xml                  # Maven configuration file
├── .gitignore               # Files and folders ignored by git
├── README.md                # Plugin documentation
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/autosell/
│       │        ├── AutoSell.java         # Main plugin class
│       │        ├── GuiManager.java       # Graphical interface management
│       │        ├── StatsManager.java     # Statistics management
│       │        └── InventoryListener.java# Inventory listener
│       └── resources/
│            ├── config.yml      # Main configuration
│            ├── messages.yml    # Customizable messages
│            └── plugin.yml      # Plugin configuration for Bukkit/Spigot
├── target/                   # Generated and compiled files (ignored in git)
```

- **src/main/java/**: Contains the plugin's Java source code.
- **src/main/resources/**: Configuration and resource files.
- **target/**: Folder where Maven places compiled files and the final JAR.
- **pom.xml**: Maven dependencies and build configuration file.

## Features

- Automatic item selling when collected (AutoSell)
- Command to sell entire inventory (/sellall)
- Graphical interface (GUI) to manage the plugin
- Sales statistics and earnings per player
- Configurable messages and notifications (chat, actionbar, title, sound)
- Permission support and configuration reload
- Advanced configuration and customizable prices

## Requirements

- **Minecraft 1.16+**
- **Vault** (economy plugin)
- **[triumph-gui](https://github.com/TriumphTeam/triumph-gui)** (GUI library)
- (Optional) **PlaceholderAPI**

## Installation

1. Download the JAR file and place it in your server's `plugins` folder.
2. Make sure you have Vault and an economy plugin installed.
3. Restart the server.
4. Configure the `config.yml` and `messages.yml` files according to your needs.

## Commands

| Command              | Description                            | Permission          |
| -------------------- | -------------------------------------- | ---------------- |
| `/autosell`          | Opens the plugin's main GUI       | autosell.use     |
| `/autosell on`       | Activates automatic selling             | autosell.use     |
| `/autosell off`      | Deactivates automatic selling          | autosell.use     |
| `/autosell toggle`   | Toggles automatic selling            | autosell.use     |
| `/autosell messages` | Activates/deactivates selling messages | autosell.use     |
| `/autosell stats`    | Shows your sales statistics     | autosell.use     |
| `/autosell reload`   | Reloads plugin configuration    | autosell.admin   |
| `/sellall`           | Sells all inventory items   | autosell.sellall |

## Permissions

| Permission          | Description                           | Default |
| ---------------- | ------------------------------------- | ----------- |
| autosell.use     | Allows using /autosell command     | true        |
| autosell.sellall | Allows using /sellall command      | true        |
| autosell.admin   | Allows using administrative commands | op          |
| autosell.reload  | Allows reloading configuration     | op          |

## Quick Configuration

The `config.yml` file allows customizing:

- Message prefix
- Required permissions
- Prices of each item (`prices` section)
- GUI options (colors, materials, slots)
- Statistics and automatic saving
- Notifications (type, sound, cooldown)
- Advanced options (debug, item limit per tick)

Price example:

```yml
prices:
  STONE: 0.5
  DIAMOND: 50.0
  GOLD_INGOT: 10.0
  ...
```

Notification options:

```yml
notifications:
  method: "ACTIONBAR" # CHAT, ACTIONBAR, TITLE, SOUND, ALL
  cooldown: 2
  sound: "ENTITY_EXPERIENCE_ORB_PICKUP"
  volume: 0.5
  pitch: 1.0
```

## Customizable Messages

All messages sent to players can be edited in `messages.yml`.

Example:

```yml
autosell:
  enabled: "&a✓ &7Automatic selling ACTIVATED!"
  disabled: "&c✗ &7Automatic selling DEACTIVATED!"
  item-sold: "&a&l$ &7You have sold &f{amount}x {item} &7for &a${price}&7."
```

## Statistics

The plugin automatically saves:

- Items sold per player
- Total earnings
- Detail by item type (optional)

You can view your statistics with `/autosell stats` or from the GUI.

## Credits

- Author: **FeliponsioDev** x Revers Studio
- Based on Vault and [triumph-gui](https://github.com/TriumphTeam/triumph-gui)

---

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more details.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>