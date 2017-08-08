'use strict';

const ContainershipApi = require('@containership/containership.api-bridge');
const K8sApi = require('@containership/containership.k8s.api-bridge');

const Constructor = process.env.CS_ORCHESTRATOR === 'kubernetes' ? K8sApi : ContainershipApi;
const DEFAULT_PORT = 8080;

module.exports = {
    Constructor,
    DEFAULT_PORT
};
