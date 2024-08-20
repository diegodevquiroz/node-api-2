#!/bin/bash


### Script para simular un Aprovisionamiento de recursos ###

setup_az() {
  echo "Logging in to Azure..."
  ### Modelo Interactivo: Se abrira un browser, luego de autenticarse cerrar ventana
  az login
  # Debe elegir la subcripcion adecuada mediante el numero que aparezca en la terminal
}

create_group() {
  local group=$1
  local location=$2
  echo "Creating Resource Group..."
  az group create --name $group --location $location
}

create_plan() {
  local group=$1
  local plan=$2
  echo "Creating Plan Service..."
  az appservice plan create \
   --resource-group $group \
   --name $plan \
   --is-linux
}

create_web_app() {
  local appName=$1
  local plan=$2
  local group=$3
  local runTime=$4
  echo "Creating Web App..."
  az webapp create \
    --name $appName \
    --plan $plan \
    --resource-group $group \
    --runtime "$runTime" #Posibles valores (NODE|18-lts | NODE|20-lts)
}

main() {

  setup_az

  create_group 'group003' 'eastus'

  create_plan 'group003' 'plan003'

  create_web_app 'appNameDiego94' 'plan003' 'group003' 'NODE|18-lts'

}