#!/bin/bash

domain="sampledomain.com" && export domain


function deploy() {

  
  #Initial resource creation
  kubectl get ns ${NAMESPACE} || kubectl create ns ${NAMESPACE}

  #Create secret to be mounted as .env
  envsubst < ./CI_FILES/.env_template > ./CI_FILES/.env
  cat ./CI_FILES/.env
  kubectl get secret env-frontend -n ${NAMESPACE} && kubectl delete secret env-frontend -n ${NAMESPACE}
  kubectl create secret generic env-frontend --from-file=CI_FILES/.env -n ${NAMESPACE} 



  kubectl get secret regcred -n ${NAMESPACE} || kubectl create secret docker-registry regcred --docker-server="$CONTAINER_REGISTRY" --docker-username="$REGCRED_USR" --docker-password="$REGCRED_PSW" -n ${NAMESPACE}

  kubectl get deployment frontend -n ${NAMESPACE} || kubectl apply -f CI_FILES/deployment.yml -n ${NAMESPACE}


  kubectl get svc frontend -n ${NAMESPACE} || envsubst < ./CI_FILES/svc.yml | kubectl apply -f -

  kubectl get ingress frontend -n ${NAMESPACE} || envsubst <./CI_FILES/ingress.yml | kubectl apply --validate=false -f -
}


deploy
