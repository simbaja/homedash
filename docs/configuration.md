## Configuration

Title, icons, links, colors, and services can be configured in the `config.yml` file (located in project root directory once built, or in the `public/` directory in development mode), using [yaml](http://yaml.org/) format.

### Config File Example and Description

```yaml
---
# Homepage configuration
# See https://coreui.io/icons/ for icons options
# Note: icons will be interpreted as a library code if it doesn't end with "png", "jpg", or "gif".

title: "Dashboard"                                            #The main title of the dashboard (shown in title bar) [optional, defaulted]
subtitle: "Homedash"                                          #The sub title of the dashboard (shown in title bar) [optional, defaulted]
logoWideSrc: "logo-wide.svg#logo-wide"                        #The wide logo - must be svg [optional, defaulted]
logoWideBox: "0 0 122 24"                                     #The view box for the logo that captures the entire design [optional, defaulted]
logoSrc: "logo-wide.svg#logo-wide"                            #The square logo source - must be svg [optional, defaulted]
logoBox: "0 0 24 24"                                          #The view box for the logo that captures the small logo design [optional, defaulted]

# Keycloak settings
keycloakAuthenticate: true                                    #Indicates whether to use Keycloak authentication [required if using keycloak]
keycloakRealm: "master"                                       #The Keycloak Realm [required if using keycloak]
keycloakClientId: "dashboard"                                 #The Keycloak Client ID for this app [required if using keycloak]
keycloakUrl:                                                  #The URL of the Keycloak instance [required if using keycloak]
#keycloakSignoutRedirectUrl:                                  #The URL to use after signing out [optional, defaults to SignedOut page]

# Optional navbar
# links: []
#   name: the name of the link [optional, will show as text]
#   icon: the icon to display [optional]
#   url: the link url [required]
#   target:
#     new: opens a new window
#     self: replaces the dashboard
links:
  - name: "Contribute"
    icon: "cib-github"
    url: "https://github.com/simbaja/homedash"
    target: "new"
  - name: "Wiki"
    icon: "cib-wikipedia"
    url: "https://www.wikipedia.org/"

# Services
# First level array represent a group
# group keys:
#   name: the name of the group [required]
#   icon: the icon of the group displayed on the home screen [optional]
#   items: the items under the group [required]
# item keys:
#   name: the name of the service [unique key, required]
#   icon: the sidebar icon (will default to logo if not separately specified) [optional]
#   subtitle: the description of the item (appears on the home screen) [optional]
#   backgroundColor: the background color (defaults to secondary) [optional]
#   badge: a label for the item [optional]
#   badgeColor: the color of the badge (defaults to primary) [optional]
#   url: the destination
#   target:
#     embed: embed within the dashboard container window (only use if the service allows, and is responsive)
#     new: opens a new window
#     self: replaces the dashboard
services:
  - name: "Applications"
    icon: "cil-cloud"
    items:
      - name: "Awesome app"
        icon: "cib-grafana"
        subtitle: "Bookmark example"
        badge: "app"
        url: "https://grafana.jcshome.simbach.net"
        target: "embed"
      - name: "Another one"
        icon: "cib-proxmox"
        subtitle: "Another application"
        backgroundColor: "warning"
        badge: "app"
        badgeColor: "info"
        url: "https://www.google.com"
```

### Style Options

Homedash uses [CoreUI](https://coreui.io/docs/getting-started/introduction/) and [CoreUI Vue](https://coreui.io/vue/docs/introduction/) for styling, which is ultimately based on [Bootstrap](https://getbootstrap.com/).  Please use them as references for any custom styling that you wish to apply.
