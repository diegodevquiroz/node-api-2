#!/bin/bash

# Declarar las variables globales
subscriptionId=""
tenantId=""
clientId=""

# Function to get the Subscription ID
get_subscription_id() {
  echo "Fetching Subscription ID..."
  subscription_id=$(az account show --query id --output tsv)
  if [ -z "$subscription_id" ]; then
    echo "Failed to retrieve Subscription ID"
    exit 1
  else
    echo "Subscription ID: $subscription_id"
    subscriptionId=$subscription_id
  fi
}

# Function to get the Tenant ID
get_tenant_id() {
  echo "Fetching Tenant ID..."
  tenant_id=$(az account list --query "[].{TenantId:tenantId}" --output tsv)
  if [ -z "$tenant_id" ]; then
    echo "Failed to retrieve Tenant ID"
    exit 1
  else
    echo "Tenant ID: $tenant_id"
    tenantId=$tenant_id
  fi
}

# Function to get the Client ID by application name
get_client_id() {
  local app_name=$1
  echo "Fetching Client ID for app: $app_name..."
  client_id=$(az ad app list --display-name "$app_name" --query "[].{ClientId:appId}" --output tsv)
  if [ -z "$client_id" ]; then
    echo "Failed to retrieve Client ID for $app_name"
    exit 1
  else
    echo "Client ID for $app_name: $client_id"
    clientId=$client_id
  fi
}

# Function to set up Azure resources
setup_azure_resources() {
    local group=$1
    local location=$2
    local plan=$3
    local nameApp=$4
    local runTime=$5
    echo "Logging in to Azure..."
    #Comentar linea si ya se hubo autenticacion a nivel de consola o terminal
    az login

    echo "Creating Resource Group..."
    #Comentar linea si no se desea crear un grupo de recursos
    az group create --name $group --location $location

    echo "Creating App Service Plan..."
    #Comentar la linea si no se desea crear un App Service Plan
    az appservice plan create --name $plan --resource-group $group --sku B1 --is-linux

    #echo "Creating Web App..."
    #az webapp create --resource-group $group --plan $plan --name $nameApp --runtime "$runtime"
}

# Main function
main() {
#   # Set up Azure resources
#   setup_azure_resources 'group003' 'eastus' 'plan003' 'appname03' 'NODE|18-lts'
 
#   # Fetch the Subscription ID
#   get_subscription_id

#   # Fetch the Tenant ID
#   get_tenant_id

#   # Fetch the Client ID for a specific app
#   app_name="appmentoria1"
#   get_client_id "$app_name"

#   echo "All IDs and resources created successfully!"
#   echo "Subscription ID: $subscriptionId"
#   echo "Tenant ID: $tenantId"
#   echo "Client ID: $clientId"
    #az login
    az ad app federated-credential create --id 143bf878-5f76-4280-b04b-642fdd558ca9 \
    --parameters "{\"name\":\"GitHubActions\",\"issuer\":\"https://token.actions.githubusercontent.com\",\"subject\":\"repo:diegoquirozramirez/node-api-2:ref:refs/heads/main\",\"audiences\":[\"api://AzureADTokenExchange\"]}"

    #get_subscription_id
    #az ad sp create-for-rbac --name "github-action-sp" --role contributor --scopes /subscriptions/$subscriptionId

}

# Execute the main function
main
