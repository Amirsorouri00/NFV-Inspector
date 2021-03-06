(function ($) {

  'use strict';

  var columnsOrder = ["id", "name", "benchmarking_tool_integration_plugin_id"];
  var url = $("#datatable-editable").data("url");
  var aoColumns = [
    {data: "id"},
    {data: "name"},
    {data: "benchmarking_tool_integration_plugin_id"},
    {"bSortable": false, "mData": null}
  ];

  $(function () {
    EditableTable.initialize(columnsOrder, url, aoColumns);
  });


}).apply(this, [jQuery]);
