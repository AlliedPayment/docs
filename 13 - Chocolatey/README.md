#Chocolatey

Chocolatey is a convenience app that installs local apps onto your machine.

The main site: https://chocolatey.org/

You can install via an administrator command prompt by running:
```
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```