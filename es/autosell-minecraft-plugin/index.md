# AutoSell

Plugin de Minecraft para vender automáticamente los ítems recogidos o todo el inventario con un solo comando. Incluye estadísticas, notificaciones personalizables y una interfaz gráfica amigable.

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```
autosell/
├── pom.xml                  # Archivo de configuración de Maven
├── .gitignore               # Archivos y carpetas ignorados por git
├── README.md                # Documentación del plugin
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/autosell/
│       │        ├── AutoSell.java         # Clase principal del plugin
│       │        ├── GuiManager.java       # Gestión de la interfaz gráfica
│       │        ├── StatsManager.java     # Gestión de estadísticas
│       │        └── InventoryListener.java# Listener de inventario
│       └── resources/
│            ├── config.yml      # Configuración principal
│            ├── messages.yml    # Mensajes personalizables
│            └── plugin.yml      # Configuración de plugin para Bukkit/Spigot
├── target/                   # Archivos generados y compilados (se ignora en git)
```

- **src/main/java/**: Contiene el código fuente Java del plugin.
- **src/main/resources/**: Archivos de configuración y recursos.
- **target/**: Carpeta donde Maven coloca los archivos compilados y el JAR final.
- **pom.xml**: Archivo de configuración de dependencias y build de Maven.

## Características

- Venta automática de ítems al recogerlos (AutoSell)
- Comando para vender todo el inventario (/sellall)
- Interfaz gráfica (GUI) para gestionar el plugin
- Estadísticas de ventas y ganancias por jugador
- Mensajes y notificaciones configurables (chat, actionbar, título, sonido)
- Soporte para permisos y recarga de configuración
- Configuración avanzada y precios personalizables

## Requisitos

- **Minecraft 1.16+**
- **Vault** (plugin de economía)
- **[triumph-gui](https://github.com/TriumphTeam/triumph-gui)** (librería para la GUI)
- (Opcional) **PlaceholderAPI**

## Instalación

1. Descarga el archivo JAR y colócalo en la carpeta `plugins` de tu servidor.
2. Asegúrate de tener Vault y un plugin de economía instalados.
3. Reinicia el servidor.
4. Configura los archivos `config.yml` y `messages.yml` según tus necesidades.

## Comandos

| Comando              | Descripción                            | Permiso          |
| -------------------- | -------------------------------------- | ---------------- |
| `/autosell`          | Abre la GUI principal del plugin       | autosell.use     |
| `/autosell on`       | Activa la venta automática             | autosell.use     |
| `/autosell off`      | Desactiva la venta automática          | autosell.use     |
| `/autosell toggle`   | Alterna la venta automática            | autosell.use     |
| `/autosell messages` | Activa/desactiva los mensajes de venta | autosell.use     |
| `/autosell stats`    | Muestra tus estadísticas de ventas     | autosell.use     |
| `/autosell reload`   | Recarga la configuración del plugin    | autosell.admin   |
| `/sellall`           | Vende todos los ítems del inventario   | autosell.sellall |

## Permisos

| Permiso          | Descripción                           | Por defecto |
| ---------------- | ------------------------------------- | ----------- |
| autosell.use     | Permite usar el comando /autosell     | true        |
| autosell.sellall | Permite usar el comando /sellall      | true        |
| autosell.admin   | Permite usar comandos administrativos | op          |
| autosell.reload  | Permite recargar la configuración     | op          |

## Configuración rápida

El archivo `config.yml` permite personalizar:

- Prefijo de mensajes
- Permisos requeridos
- Precios de cada ítem (sección `prices`)
- Opciones de la GUI (colores, materiales, slots)
- Estadísticas y guardado automático
- Notificaciones (tipo, sonido, cooldown)
- Opciones avanzadas (debug, límite de ítems por tick)

Ejemplo de precios:

```yml
prices:
  STONE: 0.5
  DIAMOND: 50.0
  GOLD_INGOT: 10.0
  ...
```

Opciones de notificación:

```yml
notifications:
  method: "ACTIONBAR" # CHAT, ACTIONBAR, TITLE, SOUND, ALL
  cooldown: 2
  sound: "ENTITY_EXPERIENCE_ORB_PICKUP"
  volume: 0.5
  pitch: 1.0
```

## Mensajes personalizables

Todos los mensajes enviados a los jugadores pueden editarse en `messages.yml`.

Ejemplo:

```yml
autosell:
  enabled: "&a✓ &7¡Venta automática ACTIVADA!"
  disabled: "&c✗ &7¡Venta automática DESACTIVADA!"
  item-sold: "&a&l$ &7Has vendido &f{amount}x {item} &7por &a${price}&7."
```

## Estadísticas

El plugin guarda automáticamente:

- Ítems vendidos por jugador
- Ganancias totales
- Detalle por tipo de ítem (opcional)

Puedes ver tus estadísticas con `/autosell stats` o desde la GUI.

## Créditos

- Autor: **FeliponsioDev** x Revers Studio
- Basado en Vault y [triumph-gui](https://github.com/TriumphTeam/triumph-gui)

---

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## 💬 Support

- 🌐 [reversstudio.com](https://reversstudio.com)
- 📧 soporte@reversstudio.com
- 💬 [Discord Revers Studio](https://discord.gg/reversstudio)

---

<div align="center">

**Developed with 💙 by [Revers Studio](https://reversstudio.com)**

</div>
