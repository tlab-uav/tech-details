---
hide_title: true
sidebar_label: UART Setup
---
# Use UART2 on Jetson TX2

## Use tty ports without super user

`sudo adduser nvidia dialout`


## Auvidea J120

- UART2 on Auvidea J120 Rev 6, could be accessed from /dev/ttyTHS1


**Minicom Setting**

```
OPTI+-----------------------------------------------------------------------+
Comp| A -    Serial Device      : /dev/ttyTHS1                              |
Port| B - Lockfile Location     : /var/lock                                 |
    | C -   Callin Program      :                                           |
Pres| D -  Callout Program      :                                           |
    | E -    Bps/Par/Bits       : 921600 8N1                                |
dffd| F - Hardware Flow Control : No                                        |
    | G - Software Flow Control : No                                        |
    |                                                                       |
    |    Change which setting?                                              |
    +-----------------------------------------------------------------------+
```
