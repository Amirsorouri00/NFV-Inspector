'use strict';

module.exports = function (app) {
    var mysqlDs = app.dataSources.mysql;
    var node = app.models.Node;
    var node_type = app.models.NodeType;
    var resource = app.models.Resource;
    var resource_type = app.models.ResourceType;
    var quality_metric = app.models.QualityMetric;
    var vnf = app.models.Vnf;

    mysqlDs.autoupdate("benchmarking_tool_integration_plugin", function (err) {
        if (err !== undefined && err !== "" && err !== null) {
            console.error("Error creating table benchmarking_tool_integration_plugin:" + err);
        }
        console.log("Autoupdated table 'benchmarking_tool_integration_plugin'");

        mysqlDs.autoupdate("quality_metric", function (err) {
            if (err !== undefined && err !== "" && err !== null) {
                console.error("Error creating table quality_metric:" + err);
            }
            console.log("Autoupdated table 'quality_metric'");

            mysqlDs.autoupdate("quality_metric_labeling_configuration", function (err) {
                if (err !== undefined && err !== "" && err !== null) {
                    console.error("Error creating table quality_metric_labeling_configuration:" + err);
                }
                console.log("Autoupdated table 'quality_metric_labeling_configuration'");

                mysqlDs.autoupdate("vnf", function (err) {
                    if (err !== undefined && err !== "" && err !== null) {
                        console.error("Error creating table vnf:" + err);
                    }
                    console.log("\nAutoupdated table 'vnf'");

                    mysqlDs.autoupdate("vnf_component", function (err) {
                        if (err !== undefined && err !== "" && err !== null) {
                            console.error("Error creating table vnf_component:" + err);
                        }
                        console.log("\nAutoupdated table 'vnf_component'");

                        mysqlDs.autoupdate("deployment", function (err) {
                            if (err !== undefined && err !== "" && err !== null) {
                                console.error("Error creating table deployment:" + err);
                            }
                            console.log("\nAutoupdated table 'deployment'");

                            mysqlDs.autoupdate("node_type", function (err) {
                                if (err !== undefined && err !== "" && err !== null) {
                                    console.error("Error creating table node_type:" + err);
                                }
                                console.log("Autoupdated table 'node_type'");

                                mysqlDs.autoupdate("resource_allocation_configuration", function (err) {
                                    if (err !== undefined && err !== "" && err !== null) {
                                        console.error("Error creating table resource_allocation_configuration:" + err);
                                    }
                                    console.log("Autoupdated table 'resource_allocation_configuration'");

                                    mysqlDs.autoupdate("node", function (err) {
                                        if (err !== undefined && err !== "" && err !== null) {
                                            console.error("Error creating table node:" + err);
                                        }
                                        console.log("\nAutoupdated table 'node'");

                                        mysqlDs.autoupdate("deployment_node", function (err) {
                                            if (err !== undefined && err !== "" && err !== null) {
                                                console.error("Error creating table deployment_node:" + err);
                                            }
                                            console.log("\nAutoupdated table 'deployment_node'");
                                        });

                                        mysqlDs.autoupdate("node_placement_configuration", function (err) {
                                            if (err !== undefined && err !== "" && err !== null) {
                                                console.error("Error creating table node_placement_configuration:" + err);
                                            }
                                            console.log("\nAutoupdated table 'node_placement_configuration'");

                                            mysqlDs.autoupdate("node_properties_configuration", function (err) {
                                                if (err !== undefined && err !== "" && err !== null) {
                                                    console.error("Error creating table node_properties_configuration:" + err);
                                                }
                                                console.log("Autoupdated table 'node_properties_configuration'");

                                                mysqlDs.autoupdate("node_property", function (err) {
                                                    if (err !== undefined && err !== "" && err !== null) {
                                                        console.error("Error creating table node_property:" + err);
                                                    }
                                                    console.log("\nAutoupdated table 'node_property'");

                                                    mysqlDs.autoupdate("node_properties_configuration_property_value", function (err) {
                                                        if (err !== undefined && err !== "" && err !== null) {
                                                            console.error("Error creating table node_properties_configuration_property_value:" + err);
                                                        }
                                                        console.log("\nAutoupdated table 'node_properties_configuration_property_value'");
                                                    });
                                                });


                                                mysqlDs.autoupdate("node_placement_configuration_node_place", function (err) {
                                                    if (err !== undefined && err !== "" && err !== null) {
                                                        console.error("Error creating table node_placement_configuration_node_place:" + err);
                                                    }
                                                    console.log("\nAutoupdated table 'node_placement_configuration_node_place'");
                                                });


                                                mysqlDs.autoupdate("traffic_demand_configuration", function (err) {
                                                    if (err !== undefined && err !== "" && err !== null) {
                                                        console.error("Error creating table traffic_demand_configuration:" + err);
                                                    }
                                                    console.log("Autoupdated table 'traffic_demand_configuration'");

                                                    mysqlDs.autoupdate("sla", function (err) {
                                                        if (err !== undefined && err !== "" && err !== null) {
                                                            console.error("Error creating table sla:" + err);
                                                        }
                                                        console.log("Autoupdated table 'sla'");

                                                        mysqlDs.autoupdate("sla_value", function (err) {
                                                            if (err !== undefined && err !== "" && err !== null) {
                                                                console.error("Error creating table sla_value:" + err);
                                                            }
                                                            console.log("Autoupdated table 'sla_value'");

                                                            mysqlDs.autoupdate("vnf_properties_configuration_set", function (err) {
                                                                if (err !== undefined && err !== "" && err !== null) {
                                                                    console.error("Error creating table vnf_properties_configuration_set:" + err);
                                                                }
                                                                console.log("\nAutoupdated table 'vnf_properties_configuration_set'");

                                                                mysqlDs.autoupdate("affinity_rule_configuration", function (err) {
                                                                    if (err !== undefined && err !== "" && err !== null) {
                                                                        console.error("Error creating table affinity_rule_configuration:" + err);
                                                                    }
                                                                    console.log("\nAutoupdated table 'affinity_rule_configuration'");

                                                                    mysqlDs.autoupdate("affinity_rule_configuration_value", function (err) {
                                                                        if (err !== undefined && err !== "" && err !== null) {
                                                                            console.error("Error creating table affinity_rule_configuration_value:" + err);
                                                                        }
                                                                        console.log("\nAutoupdated table 'affinity_rule_configuration_value'");

                                                                        mysqlDs.autoupdate("experiment_set", function (err) {
                                                                            if (err !== undefined && err !== "" && err !== null) {
                                                                                console.error("Error creating table experiment_set:" + err);
                                                                            }
                                                                            console.log("\nAutoupdated table 'experiment_set'");

                                                                            mysqlDs.autoupdate("system_function", function (err) {
                                                                                if (err !== undefined && err !== "" && err !== null) {
                                                                                    console.error("Error creating table system_function:" + err);
                                                                                }
                                                                                console.log("Autoupdated table 'system_function'");


                                                                                mysqlDs.autoupdate("system_function_chain", function (err) {
                                                                                    if (err !== undefined && err !== "" && err !== null) {
                                                                                        console.error("Error creating table system_function_chain:" + err);
                                                                                    }
                                                                                    console.log("\nAutoupdated table 'system_function_chain'");
                                                                                });

                                                                                mysqlDs.autoupdate("experiment", function (err) {
                                                                                    if (err !== undefined && err !== "" && err !== null) {
                                                                                        console.error("Error creating table experiment:" + err);
                                                                                    }
                                                                                    console.log("Autoupdated table 'experiment'");

                                                                                    mysqlDs.autoupdate("experiment_instance", function (err) {
                                                                                        if (err !== undefined && err !== "" && err !== null) {
                                                                                            console.error("Error creating table experiment_instance:" + err);
                                                                                        }
                                                                                        console.log("\nAutoupdated table 'experiment_instance'");

                                                                                        mysqlDs.autoupdate("cost_parameter", function (err) {
                                                                                            if (err !== undefined && err !== "" && err !== null) {
                                                                                                console.error("Error creating table cost_parameter:" + err);
                                                                                            }
                                                                                            console.log("\nAutoupdated table 'cost_parameter'");

                                                                                            mysqlDs.autoupdate("experiment_instance_cost", function (err) {
                                                                                                if (err !== undefined && err !== "" && err !== null) {
                                                                                                    console.error("Error creating table experiment_instance_cost:" + err);
                                                                                                }
                                                                                                console.log("\nAutoupdated table 'experiment_instance_cost'");

                                                                                                mysqlDs.autoupdate("experiment_instance_node_name_mapping", function (err) {
                                                                                                    if (err !== undefined && err !== "" && err !== null) {
                                                                                                        console.error("Error creating table experiment_instance_node_name_mapping:" + err);
                                                                                                    }
                                                                                                    console.log("\nAutoupdated table 'experiment_instance_node_name_mapping'");


                                                                                                    mysqlDs.autoupdate("experiment_set_node_setting", function (err) {
                                                                                                        if (err !== undefined && err !== "" && err !== null) {
                                                                                                            console.error("Error creating table experiment_set_node_setting:" + err);
                                                                                                        }
                                                                                                        console.log("Autoupdated table 'experiment_set_node_setting'");

                                                                                                        mysqlDs.autoupdate("experiment_set_vnf_component_setting", function (err) {
                                                                                                            if (err !== undefined && err !== "" && err !== null) {
                                                                                                                console.error("Error creating table experiment_set_vnf_component_setting:" + err);
                                                                                                            }
                                                                                                            console.log("Autoupdated table 'experiment_set_vnf_component_setting'");

                                                                                                            mysqlDs.autoupdate("resource_type", function (err) {
                                                                                                                if (err !== undefined && err !== "" && err !== null) {
                                                                                                                    console.error("Error creating table resource_type:" + err);
                                                                                                                }
                                                                                                                console.log("Autoupdated table 'resource_type'");

                                                                                                                mysqlDs.autoupdate("node_resource_requirement", function (err) {
                                                                                                                    if (err !== undefined && err !== "" && err !== null) {
                                                                                                                        console.error("Error creating table node_resource_requirement:" + err);
                                                                                                                    }
                                                                                                                    console.log("\nAutoupdated table 'node_resource_requirement'");
                                                                                                                });

                                                                                                                mysqlDs.autoupdate("resource_property", function (err) {
                                                                                                                    if (err !== undefined && err !== "" && err !== null) {
                                                                                                                        console.error("Error creating table resource_property:" + err);
                                                                                                                    }
                                                                                                                    console.log("Autoupdated table 'resource_property'");

                                                                                                                    mysqlDs.autoupdate("resource_allocation_configuration_value", function (err) {
                                                                                                                        if (err !== undefined && err !== "" && err !== null) {
                                                                                                                            console.error("Error creating table resource_allocation_configuration_value:" + err);
                                                                                                                        }
                                                                                                                        console.log("\nAutoupdated table 'resource_allocation_configuration_value'");
                                                                                                                    });


                                                                                                                    mysqlDs.autoupdate("deployment_vnf", function (err) {
                                                                                                                        if (err !== undefined && err !== "" && err !== null) {
                                                                                                                            console.error("Error creating table deployment_vnf:" + err);
                                                                                                                        }
                                                                                                                        console.log("\nAutoupdated table 'deployment_vnf'");

                                                                                                                        mysqlDs.autoupdate("experiment_instance_time_interval", function (err) {
                                                                                                                            if (err !== undefined && err !== "" && err !== null) {
                                                                                                                                console.error("Error creating table experiment_instance_time_interval:" + err);
                                                                                                                            }
                                                                                                                            console.log("\nAutoupdated table 'experiment_instance_time_interval'");


                                                                                                                            mysqlDs.autoupdate("quality_metric_labeling_configuration_value", function (err) {
                                                                                                                                if (err !== undefined && err !== "" && err !== null) {
                                                                                                                                    console.error("Error creating table quality_metric_labeling_configuration_value:" + err);
                                                                                                                                }
                                                                                                                                console.log("Autoupdated table 'quality_metric_labeling_configuration_value'");
                                                                                                                            });

                                                                                                                            mysqlDs.autoupdate("experiment_instance_quality_metric_value", function (err) {
                                                                                                                                if (err !== undefined && err !== "" && err !== null) {
                                                                                                                                    console.error("Error creating table experiment_instance_quality_metric_value:" + err);
                                                                                                                                }
                                                                                                                                console.log("\nAutoupdated table 'experiment_instance_quality_metric_value'");
                                                                                                                            });

                                                                                                                            mysqlDs.autoupdate("experiment_instance_resource_usage_value", function (err) {
                                                                                                                                if (err !== undefined && err !== "" && err !== null) {
                                                                                                                                    console.error("Error creating table experiment_instance_resource_usage_value:" + err);
                                                                                                                                }
                                                                                                                                console.log("\nAutoupdated table 'experiment_instance_resource_usage_value'");
                                                                                                                            });

                                                                                                                        });

                                                                                                                        mysqlDs.autoupdate("vnf_property", function (err) {
                                                                                                                            if (err !== undefined && err !== "" && err !== null) {
                                                                                                                                console.error("Error creating table vnf_property:" + err);
                                                                                                                            }
                                                                                                                            console.log("Autoupdated table 'vnf_property'");

                                                                                                                            mysqlDs.autoupdate("vnf_properties_configuration", function (err) {
                                                                                                                                if (err !== undefined && err !== "" && err !== null) {
                                                                                                                                    console.error("Error creating table vnf_properties_configuration:" + err);
                                                                                                                                }
                                                                                                                                console.log("Autoupdated table 'vnf_properties_configuration'");

                                                                                                                                mysqlDs.autoupdate("vnf_properties_configuration_property_value", function (err) {
                                                                                                                                    if (err !== undefined && err !== "" && err !== null) {
                                                                                                                                        console.error("Error creating table vnf_properties_configuration_property_value:" + err);
                                                                                                                                    }
                                                                                                                                    console.log("\nAutoupdated table 'vnf_properties_configuration_property_value'");
                                                                                                                                });

                                                                                                                                mysqlDs.autoupdate("experiment_node_configuration", function (err) {
                                                                                                                                    if (err !== undefined && err !== "" && err !== null) {
                                                                                                                                        console.error("Error creating table experiment_node_configuration:" + err);
                                                                                                                                    }
                                                                                                                                    console.log("\nAutoupdated table 'experiment_node_configuration'");
                                                                                                                                });
                                                                                                                            });
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    mysqlDs.autoupdate("endpoint", function (err) {
        if (err !== undefined && err !== "" && err !== null) {
            console.error("Error creating table:" + err);
        }
        console.log("Autoupdated table 'endpoint'");
    });

    const components = require(__dirname + "/../component-config");

    for (var component in components) {
        if (component.match(/^nfv-inspector-bms-/)) {
            try {
                console.log("Running migration in " + component + " under lib/boot/migration...");
                require(__dirname + "/../../node_modules/" + component + "/lib/boot/migration").migrate(app);
            } catch (ex) {
                console.log("No migration found in " + component + " under lib/boot/migration or error running it!");
                console.log(ex.stack);
            }
        }
    }
};


console.log("Migration started!");
