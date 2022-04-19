/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />

namespace InventoryManagement.BusinessObjects {

    export class SupplierListLoader {

   
        protected supplierListDtSrc: kendo.data.DataSource;
        public static SupplierListLoaderRef: SupplierListLoader;
        

        constructor() {

            

            this.GridListDataSource();

         
            SupplierListLoader.SupplierListLoaderRef = this;
        }


        private GridListDataSource() {
            this.supplierListDtSrc = new kendo.data.DataSource({
                schema: {
                    //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                    data: "Entities",
                    total: "TotalCount",
                    model: {
                        id: "SupplierId",
                        fields: {
                            Date: { type: "date" }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function (options) {


                        if (options.data.Criteria != undefined) {
                            SupplierService.List({ Criteria: options.data.Criteria },
                                res => {
                                    options.success(res);
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            SupplierService.List({ EqualityFilter: options.data.EqualityFilter },
                                res => {

                                    options.success(res);
                                })
                        }
                        else {
                            SupplierService.List({ IncludeColumns:["PhoneNumber"] },
                                res => {
                                    options.success(res);
                                })
                        }

                        //options.success({ Entities: [{ SupplierId: 1, Subject: "Subj 1" }, { SupplierId: 2, Subject: "Subj 2" }], TotalCount: 2 })
                    },
                    create: function (options) {
                        // ClassNameService.Create({ Supplier: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"SupplierId":0,', '')) },
                        //      res => {
                        //           options.success(res);
                        //   })
                    }
                },
            })//Ends

        }




        public Load(): void {
         
            this.LoadGrid();

        }

        public LoadInCustomer(customerId: number): void {


        }



        private LoadGrid() {

            $("#supplier-list").kendoGrid({
                dataSource: this.supplierListDtSrc,
                persistSelection: true,
                columns: [{ field: "SupplierName" },
                    { field: "PhoneNumber" },
                    { field: "Fax" },
                    { field: "Email" },
                    { field: "Website" },
                    { title: "&nbsp;", template: '<a href="/BusinessObjects/Supplier/SupplierDetail?ticketId=#:SupplierId#" type="button" class="btn"><i class="glyphicon glyphicon-edit"></i></a>', width: "80px" }

                ],

            })


            $("#pager").kendoPager({
                dataSource: this.supplierListDtSrc,
            });
            $("#pager2").kendoPager({
                dataSource: this.supplierListDtSrc,
            });
        }




        public HideAddButton(): void {
            $("#add-btn").hide();
        }


   




    }
}