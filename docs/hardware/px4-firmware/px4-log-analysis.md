---
hide_title: true
sidebar_label: Log Analysis
---

## FlightPlot

FlightPlot is a desktop based tool for log analysis. It can be downloaded from https://github.com/PX4/FlightPlot/releases .

To run flightplot.jar.zip, Java needs to be installed in Ubuntu.

Open terminal in the folder where flightplot.jar.zip has been saved.
```
$ java -jar flightplot.jar.zip 
```
To open flightplot

Click "Open log" to choos ".ulg" file. All the data can be found in the "Field List"



## Install Java:

```bash
$ sudo apt update
$ sudo apt install default-jdk
```
### Verify the installation:
```bash
$ java -version
```


## Install pyulog for converting .ulg to csv
For python3 :
```bash
$ pip3 install pyulog
```

### Convert .ulg file to .csv
Open terminal the folder with .ulg file.
```bash
$ ulog2csv /your/log/name.ulg
```
