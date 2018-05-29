

# MangoHome Lighting Communication Protocol

1. **Related protocol port address description:**

AP mode SSID: Mango+&quot;mac address&quot;   Password: null

Device IP address:192.168.4.1

WebSocket connect: port:81  Connect format: &quot;ws://IP: port&quot;  Example: &quot;ws://192.168.4.1:81&quot;

UDP discover devices broadcast package data：&quot;AABBCCAreYouaMangoLight&quot;

UDP connect：  port:12476

UDP reply discover devices json format：&quot;Device type, Device id(allow null), device mac, Device local ip, firmware version(allow null)&quot;

Example: {&quot;Type&quot;:0, &quot;ID&quot;:&quot;123456&quot;, &quot;MAC&quot;:&quot;68:C6:3A:B9:BB:DB&quot;, &quot;IP&quot;: &quot;192.168.4.1&quot;, &quot;VER&quot;:&quot;V 1.0&quot;};

Device type: (0: RGB, 1: RGBW, 2: Single Color, 3: Warm &amp; White, 4: Magic light)

HTTP local control：&quot; [http://192.168.4.1/CMD?command](http://192.168.4.1/CMD?command)=+&#39;json control command message&quot;

Example: http://192.168.4.1/CMD?command={&quot;cmd&quot;:5,&quot;model&quot;:2,&quot;bright&quot;:100,&quot;speed&quot;:1000,&quot;count&quot;:3,&quot;group&quot;:[16711680, 32768, 255]}

Remote update address： [http://mango.local/update](http://mango.local/update) or http://192.168.4.1 /update

1. **Json control**  **commands**  **message:**

(HTTP local control need to use &quot; [http://192.168.4.1/CMD?command](http://192.168.4.1/CMD?command)=+&#39;json control message &quot;);

(The following control command messages apply to WebSocket)

SoftAP connect to wifi Hotspot：{&quot;cmd&quot;:0,&quot;stassid&quot;:&quot;your-ssid&quot;,&quot;stapsw&quot;:&quot;your-password&quot;}

Factory reset: {&quot;cmd&quot;:1}

Restart: {&quot;cmd&quot;:2}

Changes RGB order: {&quot;cmd&quot;:3,&quot;choose&quot;:1}

Turn on/off: {&quot;cmd&quot;:4,&quot;onoroff&quot;:0}

Control lights effects: {&quot;cmd&quot;:5,&quot;model&quot;: 2,&quot;bright&quot;:100,&quot;speed&quot;: 1000,&quot;count&quot;:3,&quot;group&quot;:[16711680, 32768, 255]}

Timer mode：

Close a timer：{&quot;cmd&quot;:6, &quot;repeat&quot;:0,&quot;timid&quot;:0}    timid(0-4): 表示关闭某个ID定时器的任务

Add a timer：

Once mode：

{&quot;cmd&quot;:6,&quot;repeat&quot;:1,&quot;currenttime&quot;:1524563260,&quot;timing&quot;:1525168020,&quot;model&quot;:20,&quot;bright&quot;:50,&quot;speed&quot;:50,&quot;group&quot;:[255],&quot;timid&quot;:5,&quot;timstate&quot;:0}

Every day mode：

{&quot;cmd&quot;:6,&quot;repeat&quot;:2,&quot;currenttime&quot;:1524563260,&quot;timing&quot;:1525168020,&quot;model&quot;:20,&quot;bright&quot;:50,&quot;speed&quot;:50,&quot;group&quot;:[255],&quot;timid&quot;:5,&quot;timstate&quot;:0}

Every week mode：{&quot;cmd&quot;:6,&quot;repeat&quot;:3,&quot;currenttime&quot;:1524563260,&quot;timing&quot;:1525168020,&quot;model&quot;:20,&quot;bright&quot;:50,&quot;speed&quot;:50,&quot;group&quot;:[255],&quot;timid&quot;:5,&quot;timstate&quot;:0}

Work day mode：

{&quot;cmd&quot;:6,&quot;repeat&quot;:4,&quot;currenttime&quot;:1524563260,&quot;timing&quot;:1525168020,&quot;model&quot;:20,&quot;bright&quot;:50,&quot;speed&quot;:50,&quot;group&quot;:[255],&quot;timid&quot;:5,&quot;timstate&quot;:0,&quot;week&quot;:1}

Weekend mode：

{&quot;cmd&quot;:6,&quot;repeat&quot;:5,&quot;currenttime&quot;:1524563260,&quot;timing&quot;:1525168020,

&quot;model&quot;:20,&quot;bright&quot;:50,&quot;speed&quot;:50,&quot;group&quot;:[255],&quot;timid&quot;:5,&quot;timstate&quot;:0,&quot;week&quot;:6}

Change a timer：

{&quot;cmd&quot;:6,&quot;repeat&quot;:5,&quot;currenttime&quot;:1524563260,&quot;timing&quot;:1525168020,

&quot;model&quot;:20,&quot;bright&quot;:50,&quot;speed&quot;:50,&quot;group&quot;:[255],&quot;timid&quot;:N,&quot;timstate&quot;:0,&quot;week&quot;:6}

Select all timer：

{&quot;cmd&quot;:6, &quot;timstate&quot;:1}

Delete all timer：

 {&quot;cmd&quot;:6, &quot;timstate&quot;:2}

timid(0-5)：0-4表示要修改的任务id号，5表示新建一个任务。

1. **Parameter Description**** ：**

&quot;cmd&quot;: (commond)

0--&gt;SoftAP connect to WIFI Hotspot

1--&gt;Factory reset

2--&gt;Restart

3--&gt;Changes RGB order

4--&gt;Turn on/off

5--&gt;Control lights effects

6--&gt;Timer mode

&quot;stassid&quot;: (Router SSID)

&quot;stapsw&quot;: (Router password)

&quot;choose&quot;: (Changes RGB order, default :1)

1--&gt;GRB

2--&gt;GBR

3--&gt;RGB

4--&gt;RBG

5--&gt;BGR

6--&gt;BRG

&quot;onoroff&quot;: (Turn on/ Turn off)

0--&gt; Turn on

1--&gt; Turn off

&quot;model&quot;: (Control lights effects)

        Custom mode: 1 to 9 (RGB &amp; RGBW only support 1 to 4)

        Classic mode: 11 to 154(RGB &amp; RGBW only support 11 to 39)

&quot;bright&quot;: (Light brightness, breathing do not have brightness change)

        Range: 0 to 100(timer mode: 0 to 255)

&quot;speed&quot;: (Dynamic mode speed)

        Range: 0 to 100

&quot;count&quot;: (Color count：group&#39; s count)

        Range: 1 to 7

&quot;group&quot;: (Color group)

        A array of decimal numbers.

        Example: [16711680, 32768, 255, 16776960, 65535, 8388736, 16777215], convert by [0xFF0000,0x008000,0x0000FF, 0xFFFF00, 0x00FFFF, 0x800080, 0xFFFFFF]

&quot;currenttime&quot;: (Current timestamp)

&quot;timing&quot;: (The timestamp of the first timing)

&quot;repeat&quot;: (Repeat mode)

0--&gt;Close timer

1--&gt;Once mode

2--&gt;Every day mode

3--&gt; Every week mode

4--&gt;Work day mode

5--&gt;Weekend mode

&quot;week&quot;: (Current week, only &quot;repeat&quot; is 4 or 5, need to add &quot;week&quot;)

1--&gt;Monday

2--&gt;Tuesday

3--&gt;Wednesday

4--&gt;Thursday

5--&gt;Friday

6--&gt;Saturday

7--&gt;Sunday

&quot;timid&quot;: (Timer id)

        Range: 0 to 5

0 to 4: New a timer

5: Change a timer

&quot;timstate&quot;: (select timer or delete timer)

        1: Select all timer

        2: Delete all timer

1. **Control**  **l**** ights effects commands:**

In the following commands, all parameters can be changed except the model

| Custom static | {&quot;cmd&quot;:5,&quot;model&quot;: 1,&quot;bright&quot;:100,&quot;speed&quot;: 100,&quot;count&quot;:1,&quot;group&quot;:[16777215]} |
| --- | --- |
| Custom jump changes | {&quot;cmd&quot;:5,&quot;model&quot;: 2,&quot;bright&quot;:100,&quot;speed&quot;: 100,&quot;count&quot;:3,&quot;group&quot;:[16711680, 32768, 255]} |
| Custom flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 3,&quot;bright&quot;:100,&quot;speed&quot;: 100,&quot;count&quot;:3,&quot;group&quot;:[16711680, 32768, 255]} |
| Custom breathing | {&quot;cmd&quot;:5,&quot;model&quot;: 4,&quot;speed&quot;: 5,&quot;count&quot;:3,&quot;group&quot;:[16711680, 32768, 255]} |
| Static red | {&quot;cmd&quot;:5,&quot;model&quot;: 11,&quot;bright&quot;:100} |
| Static green | {&quot;cmd&quot;:5,&quot;model&quot;: 12,&quot;bright&quot;:100} |
| Static blue | {&quot;cmd&quot;:5,&quot;model&quot;: 13,&quot;bright&quot;:100} |
| Static yellow | {&quot;cmd&quot;:5,&quot;model&quot;: 14,&quot;bright&quot;:100} |
| Static cyan | {&quot;cmd&quot;:5,&quot;model&quot;: 15,&quot;bright&quot;:100} |
| Static purple | {&quot;cmd&quot;:5,&quot;model&quot;: 16,&quot;bright&quot;:100} |
| Static white | {&quot;cmd&quot;:5,&quot;model&quot;: 17,&quot;bright&quot;:100} |
| 3-color jump changes | {&quot;cmd&quot;:5,&quot;model&quot;: 18,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| 7-color jump changes | {&quot;cmd&quot;:5,&quot;model&quot;: 19,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| 3-color breathing | {&quot;cmd&quot;:5,&quot;model&quot;: 20, &quot;speed&quot;: 5} |
| 7-color breathing | {&quot;cmd&quot;:5,&quot;model&quot;: 21, &quot;speed&quot;: 5} |
| Red breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 22,&quot;speed&quot;: 5} |
| Green breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 23, &quot;speed&quot;: 5} |
| Blue breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 24, &quot;speed&quot;: 5} |
| Yellow breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 25, &quot;speed&quot;: 5} |
| Cyan breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 26, &quot;speed&quot;: 5} |
| Purple breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 27, &quot;speed&quot;: 5} |
| White breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 28, &quot;speed&quot;: 5} |
| Red &amp; green breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 29, &quot;speed&quot;: 5} |
| Red &amp; blue breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 30, &quot;speed&quot;: 5} |
| Green &amp; blue breathing lamp | {&quot;cmd&quot;:5,&quot;model&quot;: 31, &quot;speed&quot;: 5} |
| 7-color flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 32,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| Red flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 33,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| Green flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 34,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| Blue flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 35,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| Yellow flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 36,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| Cyan flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 37,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| Purple flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 38,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
| White flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 39,&quot;bright&quot;:100,&quot;speed&quot;: 100} |
|   |   |

RGBW commands: (Support RGB commands)

| Custom static | {&quot;cmd&quot;:5,&quot;model&quot;: 1,&quot;bright&quot;:100,&quot;speed&quot;: 100,&quot;count&quot;:1,&quot;group&quot;:[RGBW]} | RGBW=W\*216\*216\*216-1677216+RGB |
| --- | --- | --- |

Magic commands: (Support RGB commands)

| Custom horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 5,&quot;speed&quot;:100,&quot;count&quot;:1,&quot;group&quot;:[255],&quot;group1&quot;:[8192],&quot;side&quot;:0,&quot;number&quot;:0} |
| --- | --- |
| Custom water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 6,&quot;speed&quot;: 100,&quot;count&quot;:1,&quot;group&quot;:[255],&quot;group1&quot;:[0],&quot;side&quot;:0,&quot;number&quot;:0} |
| Custom trail | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 7,&quot;speed&quot;: 40,&quot;count&quot;:1,&quot;group&quot;:[255],&quot;group1&quot;:[8192],&quot;side&quot;:0,&quot;number&quot;:2} |
| Custom String move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 8,&quot;speed&quot;: 30,&quot;count&quot;:1,&quot;group&quot;:[255],&quot;group1&quot;:[0],&quot;side&quot;:0,&quot;number&quot;:0} |
| Custom Building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 9,&quot;speed&quot;: 30,&quot;count&quot;:1,&quot;group&quot;:[255],&quot;group1&quot;:[0],&quot;side&quot;:0,&quot;number&quot;:0} |

| Red horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 40,&quot;speed&quot;: 20} |
| --- | --- |
| Green horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 41,&quot;speed&quot;: 20} |
| Blue horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 42,&quot;speed&quot;: 20} |
| Yellow horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 43,&quot;speed&quot;: 20} |
| Cyan horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 44,&quot;speed&quot;: 20} |
| Purple horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 45,&quot;speed&quot;: 20} |
| White horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 46,&quot;speed&quot;: 20} |
| Red horse race to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 47,&quot;speed&quot;: 20} |
| Green horse race to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 48,&quot;speed&quot;: 20} |
| Blue horse race to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 49,&quot;speed&quot;: 20} |
| Yellow horse race to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 50,&quot;speed&quot;: 20} |
| Cyan horse race to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 51,&quot;speed&quot;: 20} |
| Purple horse race to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 52,&quot;speed&quot;: 20} |
| White horse race to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 53,&quot;speed&quot;: 20} |
| Red horse race to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 54,&quot;speed&quot;: 20} |
| Green horse race to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 55,&quot;speed&quot;: 20} |
| Blue horse race to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 56,&quot;speed&quot;: 20} |
| Yellow horse race to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 57,&quot;speed&quot;: 20} |
| Cyan horse race to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 58,&quot;speed&quot;: 20} |
| Purple horse race to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 59,&quot;speed&quot;: 20} |
| White horse race to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 60,&quot;speed&quot;: 20} |
| 3-color horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 61,&quot;speed&quot;: 100} |
| 7-color horse race | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 62,&quot;speed&quot;: 100} |
| Red water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 63,&quot;speed&quot;: 30} |
| Green water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 64,&quot;speed&quot;: 30} |
| Blue water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 65,&quot;speed&quot;: 30} |
| Yellow water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 66,&quot;speed&quot;: 30} |
| Cyan water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 67,&quot;speed&quot;: 30} |
| Purple water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 68,&quot;speed&quot;: 30} |
| White water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 69,&quot;speed&quot;: 30} |
| Red water move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 70,&quot;speed&quot;: 50} |
| Green water move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 71,&quot;speed&quot;: 50} |
| Blue water move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 72,&quot;speed&quot;: 50} |
| Yellow water move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 73,&quot;speed&quot;: 50} |
| Cyan water move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 74,&quot;speed&quot;: 50} |
| Purple water move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 75,&quot;speed&quot;: 50} |
| White water move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 76,&quot;speed&quot;: 50} |
| Red water move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 77,&quot;speed&quot;: 50} |
| Green water move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 78,&quot;speed&quot;: 50} |
| Blue water move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 79,&quot;speed&quot;: 50} |
| Yellow water move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 80,&quot;speed&quot;: 50} |
| Cyan water move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 81,&quot;speed&quot;: 50} |
| Purple water move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 82,&quot;speed&quot;: 50} |
| White water move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 83,&quot;speed&quot;: 50} |
| 3-color water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 84,&quot;speed&quot;: 100} |
| 7-color water move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 85,&quot;speed&quot;: 100} |
| Red trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 86,&quot;speed&quot;: 80} |
| Green trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 87,&quot;speed&quot;: 80} |
| Blue trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 88,&quot;speed&quot;: 80} |
| Yellow trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 89,&quot;speed&quot;: 80} |
| Cyan trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 90,&quot;speed&quot;: 80} |
| Purple trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 91,&quot;speed&quot;: 80} |
| White trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 92,&quot;speed&quot;: 80} |
| Red trailing to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 93,&quot;speed&quot;: 80} |
| Green trailing to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 94,&quot;speed&quot;: 80} |
| Blue trailing to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 95,&quot;speed&quot;: 80} |
| Yellow trailing to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 96,&quot;speed&quot;: 80} |
| Cyan trailing to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 97,&quot;speed&quot;: 80} |
| Purple trailing to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 98,&quot;speed&quot;: 80} |
| White trailing to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 99,&quot;speed&quot;: 80} |
| Red trailing to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 100,&quot;speed&quot;: 80} |
| Green trailing to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 101,&quot;speed&quot;: 80} |
| Blue trailing to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 102,&quot;speed&quot;: 80} |
| Yellow trailing to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 103,&quot;speed&quot;: 80} |
| Cyan trailing to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 104,&quot;speed&quot;: 80} |
| Purple trailing to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 105,&quot;speed&quot;: 80} |
| White trailing to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 106,&quot;speed&quot;: 80} |
| 3-color trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 107,&quot;speed&quot;: 80} |
| 7-color trailing | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 108,&quot;speed&quot;: 80} |
| Red building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 109,&quot;speed&quot;: 30} |
| Green building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 110,&quot;speed&quot;: 30} |
| Blue building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 111,&quot;speed&quot;: 30} |
| Yellow building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 112,&quot;speed&quot;: 30} |
| Cyan building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 113,&quot;speed&quot;: 30} |
| Purple building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 114,&quot;speed&quot;: 30} |
| White building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 115,&quot;speed&quot;: 30} |
| Red building blocks to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 116,&quot;speed&quot;: 30} |
| Green building blocks to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 117,&quot;speed&quot;: 30} |
| Blue building blocks to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 118,&quot;speed&quot;: 30} |
| Yellow building blocks to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 119,&quot;speed&quot;: 30} |
| Cyan building blocks to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 120,&quot;speed&quot;: 30} |
| Purple building blocks to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 121,&quot;speed&quot;: 30} |
| White building blocks to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 122,&quot;speed&quot;: 30} |
| Red building blocks to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 123,&quot;speed&quot;: 30} |
| Green building blocks to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 124,&quot;speed&quot;: 30} |
| Blue building blocks to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 125,&quot;speed&quot;: 30} |
| Yellow building blocks to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 126,&quot;speed&quot;: 30} |
| Cyan building blocks to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 127,&quot;speed&quot;: 30} |
| Purple building blocks to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 128,&quot;speed&quot;: 30} |
| White building blocks to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 129,&quot;speed&quot;: 30} |
| 3-color building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 130,&quot;speed&quot;: 30} |
| 7-color building blocks | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 131,&quot;speed&quot;: 30} |
| Red string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 132,&quot;speed&quot;: 30} |
| Green string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 133,&quot;speed&quot;: 30} |
| Blue string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 134,&quot;speed&quot;: 30} |
| Yellow string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 135,&quot;speed&quot;: 30} |
| Cyan string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 136,&quot;speed&quot;: 30} |
| Purple string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 137,&quot;speed&quot;: 30} |
| White string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 138,&quot;speed&quot;: 30} |
| Red string move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 139,&quot;speed&quot;: 30} |
| Green string move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 140,&quot;speed&quot;: 30} |
| Blue string move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 141,&quot;speed&quot;: 30} |
| Yellow string move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 142,&quot;speed&quot;: 30} |
| Cyan string move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 143,&quot;speed&quot;: 30} |
| Purple string move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 144,&quot;speed&quot;: 30} |
| White string move to two sides | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 145,&quot;speed&quot;: 30} |
| Red string move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 146,&quot;speed&quot;: 30} |
| Green string move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 147,&quot;speed&quot;: 30} |
| Blue string move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 148,&quot;speed&quot;: 30} |
| Yellow string move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 149,&quot;speed&quot;: 30} |
| Cyan string move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 150,&quot;speed&quot;: 30} |
| Purple string move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 151,&quot;speed&quot;: 30} |
| White string move to middle | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 152,&quot;speed&quot;: 30} |
| 3-color string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 153,&quot;speed&quot;: 30} |
| 7-color string move | {&quot;cmd&quot;:5,&quot;bright&quot;:100,&quot;model&quot;: 154,&quot;speed&quot;: 30} |
| |   |

| Custom static | {&quot;cmd&quot;:5,&quot;model&quot;: 1,&quot;bright&quot;:100,&quot;count&quot;:1,&quot;group&quot;:[16777215]} | &quot;group&quot; fixed |
| --- | --- | --- |
| Custom jump changes | {&quot;cmd&quot;:5,&quot;model&quot;: 2,&quot;bright&quot;:100,&quot;speed&quot;: 100,&quot;count&quot;:1,&quot;group&quot;:[16777215]} | &quot;group&quot; fixed |
| Custom flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 3,&quot;bright&quot;:100,&quot;speed&quot;: 100,&quot;count&quot;:1,&quot;group&quot;:[16777215]} | &quot;group&quot; fixed |
| Custom breathing | {&quot;cmd&quot;:5,&quot;model&quot;: 4,&quot;speed&quot;: 5,&quot;count&quot;:1,&quot;group&quot;:[16777215]} | &quot;group&quot; fixed |
|   |
|   Wram &amp; white commands |
| Custom static | {&quot;cmd&quot;:5,&quot;model&quot;: 1,&quot;bright&quot;:100,&quot;count&quot;:1,&quot;group&quot;:[16777215]} | &quot;group&quot; range: 0 to 1677215 (0x0000ff-0xffffff)
  |
| Custom jump changes | {&quot;cmd&quot;:5,&quot;model&quot;: 2,&quot;bright&quot;:100,&quot;speed&quot;: 100,&quot;count&quot;:2,&quot;group&quot;:[255，65280]} |
| Custom flashing | {&quot;cmd&quot;:5,&quot;model&quot;: 3,&quot;bright&quot;:100,&quot;speed&quot;: 100,&quot;count&quot;:2,&quot;group&quot;:[255，65280]} |
| Custom breathing | {&quot;cmd&quot;:5,&quot;model&quot;: 4,&quot;speed&quot;: 5,&quot;count&quot;:2,&quot;group&quot;:[255，65280]} |

