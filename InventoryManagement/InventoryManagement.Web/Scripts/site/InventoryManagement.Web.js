var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = this;
                _super.call(this, container);
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                this.form = new Membership.LoginForm(this.idPrefix);
                this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.SignUpForm(this.idPrefix);
                this.form.ConfirmEmail.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ResetPasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ForgotPasswordForm(this.idPrefix);
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ChangePasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('InventoryManagement');
    })(ScriptInitialization = InventoryManagement.ScriptInitialization || (InventoryManagement.ScriptInitialization = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                _super.call(this, options);
                this.updateInterface();
                this.loadReport(this.options.reportKey);
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.propertyItems
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = this;
                _super.call(this, element);
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                _super.call(this, select);
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = this;
                _super.call(this, input);
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                this.menuUL = menuUL;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = this;
                _super.call(this, select);
                this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(this.getCurrentTheme());
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var AccountForm = (function (_super) {
            __extends(AccountForm, _super);
            function AccountForm() {
                _super.apply(this, arguments);
            }
            AccountForm.formKey = 'Administration.Account';
            return AccountForm;
        }(Serenity.PrefixedContext));
        Administration.AccountForm = AccountForm;
        [['Date', function () { return Serenity.DateEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['WebsiteAddress', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(AccountForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var AccountRow;
        (function (AccountRow) {
            AccountRow.idProperty = 'AccountId';
            AccountRow.nameProperty = 'CompanyName';
            AccountRow.localTextPrefix = 'Administration.Account';
            AccountRow.lookupKey = 'Administration.Account';
            function getLookup() {
                return Q.getLookup('Administration.Account');
            }
            AccountRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AccountRow.Fields || (AccountRow.Fields = {}));
            [
                'AccountId',
                'Date',
                'CompanyName',
                'Address',
                'Email',
                'PhoneNumber',
                'WebsiteAddress'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AccountRow = Administration.AccountRow || (Administration.AccountRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var AccountService;
        (function (AccountService) {
            AccountService.baseUrl = 'Administration/Account';
            var Methods;
            (function (Methods) {
            })(Methods = AccountService.Methods || (AccountService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AccountService[x] = function (r, s, o) {
                    return Q.serviceRequest(AccountService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AccountService.baseUrl + '/' + x;
            });
        })(AccountService = Administration.AccountService || (Administration.AccountService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var GetCodeForm = (function (_super) {
            __extends(GetCodeForm, _super);
            function GetCodeForm() {
                _super.apply(this, arguments);
            }
            GetCodeForm.formKey = 'Administration.GetCode';
            return GetCodeForm;
        }(Serenity.PrefixedContext));
        Administration.GetCodeForm = GetCodeForm;
        [['AccountId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['LocationLocationName', function () { return Serenity.StringEditor; }], ['LinkCode', function () { return Serenity.TextAreaEditor; }], ['FormCode', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(GetCodeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var GetCodeRow;
        (function (GetCodeRow) {
            GetCodeRow.idProperty = 'GetCodeId';
            GetCodeRow.nameProperty = 'LocationLocationName';
            GetCodeRow.localTextPrefix = 'Administration.GetCode';
            GetCodeRow.lookupKey = 'Administration.GetCode';
            function getLookup() {
                return Q.getLookup('Administration.GetCode');
            }
            GetCodeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = GetCodeRow.Fields || (GetCodeRow.Fields = {}));
            [
                'GetCodeId',
                'AccountId',
                'LocationId',
                'LinkCode',
                'FormCode',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId',
                'LocationIsVisible'
            ].forEach(function (x) { return Fields[x] = x; });
        })(GetCodeRow = Administration.GetCodeRow || (Administration.GetCodeRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var GetCodeService;
        (function (GetCodeService) {
            GetCodeService.baseUrl = 'Administration/GetCode';
            var Methods;
            (function (Methods) {
            })(Methods = GetCodeService.Methods || (GetCodeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GetCodeService[x] = function (r, s, o) {
                    return Q.serviceRequest(GetCodeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = GetCodeService.baseUrl + '/' + x;
            });
        })(GetCodeService = Administration.GetCodeService || (Administration.GetCodeService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                _super.apply(this, arguments);
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            [
                'Id',
                'LanguageId',
                'LanguageName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LocationForm = (function (_super) {
            __extends(LocationForm, _super);
            function LocationForm() {
                _super.apply(this, arguments);
            }
            LocationForm.formKey = 'Administration.Location';
            return LocationForm;
        }(Serenity.PrefixedContext));
        Administration.LocationForm = LocationForm;
        [['AccountId', function () { return Serenity.LookupEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['LocationName', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['Website', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.TextAreaEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }], ['IsVisible', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(LocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LocationRow;
        (function (LocationRow) {
            LocationRow.idProperty = 'LocationId';
            LocationRow.nameProperty = 'LocationName';
            LocationRow.localTextPrefix = 'Administration.Location';
            LocationRow.lookupKey = 'Administration.Location';
            function getLookup() {
                return Q.getLookup('Administration.Location');
            }
            LocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LocationRow.Fields || (LocationRow.Fields = {}));
            [
                'LocationId',
                'AccountId',
                'Date',
                'PhoneNumber',
                'Email',
                'Website',
                'LocationName',
                'Address',
                'UserId',
                'AccountDate',
                'AccountCompanyName',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress',
                'IsVisible'
            ].forEach(function (x) { return Fields[x] = x; });
        })(LocationRow = Administration.LocationRow || (Administration.LocationRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LocationService;
        (function (LocationService) {
            LocationService.baseUrl = 'Administration/Location';
            var Methods;
            (function (Methods) {
            })(Methods = LocationService.Methods || (LocationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(LocationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = LocationService.baseUrl + '/' + x;
            });
        })(LocationService = Administration.LocationService || (Administration.LocationService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                _super.apply(this, arguments);
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleLocationForm = (function (_super) {
            __extends(RoleLocationForm, _super);
            function RoleLocationForm() {
                _super.apply(this, arguments);
            }
            RoleLocationForm.formKey = 'Administration.RoleLocation';
            return RoleLocationForm;
        }(Serenity.PrefixedContext));
        Administration.RoleLocationForm = RoleLocationForm;
        [['RoleId', function () { return Serenity.IntegerEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(RoleLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleLocationRow;
        (function (RoleLocationRow) {
            RoleLocationRow.idProperty = 'RoleId';
            RoleLocationRow.localTextPrefix = 'Administration.RoleLocation';
            RoleLocationRow.lookupKey = 'Administration.RoleLocationRow';
            function getLookup() {
                return Q.getLookup('Administration.RoleLocationRow');
            }
            RoleLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleLocationRow.Fields || (RoleLocationRow.Fields = {}));
            [
                'RoleLocationId',
                'RoleId',
                'LocationId',
                'RoleRoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RoleLocationRow = Administration.RoleLocationRow || (Administration.RoleLocationRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleLocationService;
        (function (RoleLocationService) {
            RoleLocationService.baseUrl = 'Administration/RoleLocation';
            var Methods;
            (function (Methods) {
            })(Methods = RoleLocationService.Methods || (RoleLocationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleLocationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RoleLocationService.baseUrl + '/' + x;
            });
        })(RoleLocationService = Administration.RoleLocationService || (Administration.RoleLocationService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            [
                'RolePermissionId',
                'RoleId',
                'PermissionKey',
                'RoleRoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            [
                'RoleId',
                'RoleName',
                'LocationList',
                'AccountId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                _super.apply(this, arguments);
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['CustomerId', function () { return Serenity.IntegerEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserLocationForm = (function (_super) {
            __extends(UserLocationForm, _super);
            function UserLocationForm() {
                _super.apply(this, arguments);
            }
            UserLocationForm.formKey = 'Administration.UserLocation';
            return UserLocationForm;
        }(Serenity.PrefixedContext));
        Administration.UserLocationForm = UserLocationForm;
        [['UserId', function () { return Serenity.IntegerEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(UserLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserLocationRow;
        (function (UserLocationRow) {
            UserLocationRow.idProperty = 'UserLocationId';
            UserLocationRow.localTextPrefix = 'Administration.UserLocation';
            UserLocationRow.lookupKey = 'Administration.UserLocation';
            function getLookup() {
                return Q.getLookup('Administration.UserLocation');
            }
            UserLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserLocationRow.Fields || (UserLocationRow.Fields = {}));
            [
                'UserLocationId',
                'UserId',
                'LocationId',
                'UserUsername',
                'UserDisplayName',
                'UserEmail',
                'UserSource',
                'UserPasswordHash',
                'UserPasswordSalt',
                'UserInsertDate',
                'UserInsertUserId',
                'UserUpdateDate',
                'UserUpdateUserId',
                'UserIsActive',
                'UserLastDirectoryUpdate',
                'UserUserImage',
                'UserAccountId',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserLocationRow = Administration.UserLocationRow || (Administration.UserLocationRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserLocationService;
        (function (UserLocationService) {
            UserLocationService.baseUrl = 'Administration/UserLocation';
            var Methods;
            (function (Methods) {
            })(Methods = UserLocationService.Methods || (UserLocationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserLocationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserLocationService.baseUrl + '/' + x;
            });
        })(UserLocationService = Administration.UserLocationService || (Administration.UserLocationService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            [
                'UserPermissionId',
                'UserId',
                'PermissionKey',
                'Granted',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.lookupKey = 'Administration.UserRoleRow';
            function getLookup() {
                return Q.getLookup('Administration.UserRoleRow');
            }
            UserRoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            [
                'UserRoleId',
                'UserId',
                'RoleId',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            [
                'UserId',
                'Username',
                'Source',
                'PasswordHash',
                'PasswordSalt',
                'DisplayName',
                'Email',
                'UserImage',
                'LastDirectoryUpdate',
                'IsActive',
                'Password',
                'PasswordConfirm',
                'AccountId',
                'CustomerId',
                'LocationList',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDate'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var AdjustStockForm = (function (_super) {
            __extends(AdjustStockForm, _super);
            function AdjustStockForm() {
                _super.apply(this, arguments);
            }
            AdjustStockForm.formKey = 'BusinessObjects.AdjustStock';
            return AdjustStockForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.AdjustStockForm = AdjustStockForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['DummyQuantity', function () { return Serenity.DecimalEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['ActionKey', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(AdjustStockForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankForm = (function (_super) {
            __extends(BankForm, _super);
            function BankForm() {
                _super.apply(this, arguments);
            }
            BankForm.formKey = 'BusinessObjects.Bank';
            return BankForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.BankForm = BankForm;
        [['Date', function () { return Serenity.DateEditor; }], ['BankName', function () { return Serenity.StringEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(BankForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankRow;
        (function (BankRow) {
            BankRow.idProperty = 'BankId';
            BankRow.nameProperty = 'BankName';
            BankRow.localTextPrefix = 'BusinessObjects.Bank';
            BankRow.lookupKey = 'BusinessObjects.Bank';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Bank');
            }
            BankRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = BankRow.Fields || (BankRow.Fields = {}));
            [
                'BankId',
                'Date',
                'BankName',
                'AccountId',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BankRow = BusinessObjects.BankRow || (BusinessObjects.BankRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankService;
        (function (BankService) {
            BankService.baseUrl = 'BusinessObjects/Bank';
            var Methods;
            (function (Methods) {
            })(Methods = BankService.Methods || (BankService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BankService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BankService.baseUrl + '/' + x;
            });
        })(BankService = BusinessObjects.BankService || (BusinessObjects.BankService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankTransactionForm = (function (_super) {
            __extends(BankTransactionForm, _super);
            function BankTransactionForm() {
                _super.apply(this, arguments);
            }
            BankTransactionForm.formKey = 'BusinessObjects.BankTransaction';
            return BankTransactionForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.BankTransactionForm = BankTransactionForm;
        [['BankId', function () { return Serenity.LookupEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['AccountType', function () { return Serenity.StringEditor; }], ['CustomerId', function () { return Serenity.LookupEditor; }], ['SalesId', function () { return Serenity.LookupEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }], ['SalesPymntDetailsId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BankTransactionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankTransactionRow;
        (function (BankTransactionRow) {
            BankTransactionRow.idProperty = 'BankTransactionId';
            BankTransactionRow.nameProperty = 'AccountType';
            BankTransactionRow.localTextPrefix = 'BusinessObjects.BankTransaction';
            BankTransactionRow.lookupKey = 'BusinessObjects.BankTransaction';
            function getLookup() {
                return Q.getLookup('BusinessObjects.BankTransaction');
            }
            BankTransactionRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = BankTransactionRow.Fields || (BankTransactionRow.Fields = {}));
            [
                'BankTransactionId',
                'BankId',
                'Date',
                'AccountType',
                'CustomerId',
                'SalesId',
                'Amount',
                'LocationId',
                'SalesPymntDetailsId',
                'BankDate',
                'BankBankName',
                'BankAccountId',
                'CustomerName',
                'CustomerPhoneNumber',
                'CustomerEmail',
                'CustomerWebsite',
                'CustomerAddress',
                'CustomerAccountId',
                'CustomerAddress2',
                'SalesOrderId',
                'SalesDate',
                'SalesCustomerId',
                'SalesTotalAmount',
                'SalesTotalAmountPaid',
                'SalesTotalAmountLeft',
                'SalesCostOfGoodsSold',
                'SalesGrossProfit',
                'SalesHasSalesDetails',
                'SalesLocationId',
                'SalesIsIntegerTrailingOrderIdWithPrefixSo',
                'SalesStatus',
                'SalesIsOpen',
                'SalesIsInProgress',
                'SalesIsFullyPicked',
                'SalesIsFullyPaid',
                'SalesIsInvoiced',
                'SalesIsAdvanced'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BankTransactionRow = BusinessObjects.BankTransactionRow || (BusinessObjects.BankTransactionRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankTransactionService;
        (function (BankTransactionService) {
            BankTransactionService.baseUrl = 'BusinessObjects/BankTransaction';
            var Methods;
            (function (Methods) {
            })(Methods = BankTransactionService.Methods || (BankTransactionService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BankTransactionService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankTransactionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BankTransactionService.baseUrl + '/' + x;
            });
        })(BankTransactionService = BusinessObjects.BankTransactionService || (BusinessObjects.BankTransactionService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BillOfMaterialForm = (function (_super) {
            __extends(BillOfMaterialForm, _super);
            function BillOfMaterialForm() {
                _super.apply(this, arguments);
            }
            BillOfMaterialForm.formKey = 'BusinessObjects.BillOfMaterial';
            return BillOfMaterialForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.BillOfMaterialForm = BillOfMaterialForm;
        [['ProductId', function () { return Serenity.IntegerEditor; }], ['ComponentItem', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['Cost', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(BillOfMaterialForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BillOfMaterialRow;
        (function (BillOfMaterialRow) {
            BillOfMaterialRow.idProperty = 'BillOfMaterialId';
            BillOfMaterialRow.nameProperty = 'ComponentItem';
            BillOfMaterialRow.localTextPrefix = 'BusinessObjects.BillOfMaterial2';
            var Fields;
            (function (Fields) {
            })(Fields = BillOfMaterialRow.Fields || (BillOfMaterialRow.Fields = {}));
            [
                'BillOfMaterialId',
                'ProductId',
                'ComponentItem',
                'Description',
                'Quantity',
                'Cost',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductBarcode',
                'ProductReorderPoint',
                'ProductReorderQuantity',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BillOfMaterialRow = BusinessObjects.BillOfMaterialRow || (BusinessObjects.BillOfMaterialRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BillOfMaterialService;
        (function (BillOfMaterialService) {
            BillOfMaterialService.baseUrl = 'BusinessObjects/BillOfMaterial';
            var Methods;
            (function (Methods) {
            })(Methods = BillOfMaterialService.Methods || (BillOfMaterialService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BillOfMaterialService[x] = function (r, s, o) {
                    return Q.serviceRequest(BillOfMaterialService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BillOfMaterialService.baseUrl + '/' + x;
            });
        })(BillOfMaterialService = BusinessObjects.BillOfMaterialService || (BusinessObjects.BillOfMaterialService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CostingInfoForm = (function (_super) {
            __extends(CostingInfoForm, _super);
            function CostingInfoForm() {
                _super.apply(this, arguments);
            }
            CostingInfoForm.formKey = 'BusinessObjects.CostingInfo';
            return CostingInfoForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.CostingInfoForm = CostingInfoForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['Cost', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(CostingInfoForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CostingInfoRow;
        (function (CostingInfoRow) {
            CostingInfoRow.idProperty = 'CostingInfoId';
            CostingInfoRow.localTextPrefix = 'BusinessObjects.CostingInfo';
            CostingInfoRow.lookupKey = 'BusinessObjects.CostingInfo';
            function getLookup() {
                return Q.getLookup('BusinessObjects.CostingInfo');
            }
            CostingInfoRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CostingInfoRow.Fields || (CostingInfoRow.Fields = {}));
            [
                'CostingInfoId',
                'ProductId',
                'Cost',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CostingInfoRow = BusinessObjects.CostingInfoRow || (BusinessObjects.CostingInfoRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CostingInfoService;
        (function (CostingInfoService) {
            CostingInfoService.baseUrl = 'BusinessObjects/CostingInfo';
            var Methods;
            (function (Methods) {
            })(Methods = CostingInfoService.Methods || (CostingInfoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CostingInfoService[x] = function (r, s, o) {
                    return Q.serviceRequest(CostingInfoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CostingInfoService.baseUrl + '/' + x;
            });
        })(CostingInfoService = BusinessObjects.CostingInfoService || (BusinessObjects.CostingInfoService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                _super.apply(this, arguments);
            }
            CustomerForm.formKey = 'BusinessObjects.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.CustomerForm = CustomerForm;
        [['Name', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['Website', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.TextAreaEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerLocationForm = (function (_super) {
            __extends(CustomerLocationForm, _super);
            function CustomerLocationForm() {
                _super.apply(this, arguments);
            }
            CustomerLocationForm.formKey = 'BusinessObjects.CustomerLocation';
            return CustomerLocationForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.CustomerLocationForm = CustomerLocationForm;
        [['CustomerId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerLocationRow;
        (function (CustomerLocationRow) {
            CustomerLocationRow.idProperty = 'CustomersLocationsId';
            CustomerLocationRow.localTextPrefix = 'BusinessObjects.CustomerLocation';
            CustomerLocationRow.lookupKey = 'BusinessObjects.CustomerLocation';
            function getLookup() {
                return Q.getLookup('BusinessObjects.CustomerLocation');
            }
            CustomerLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerLocationRow.Fields || (CustomerLocationRow.Fields = {}));
            [
                'CustomersLocationsId',
                'CustomerId',
                'LocationId',
                'AccountId',
                'CustomerDate',
                'CustomerName',
                'CustomerPhoneNumber',
                'CustomerEmail',
                'CustomerWebsite',
                'CustomerAddress',
                'CustomerAccountId',
                'CustomerAddress2',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId',
                'LocationIsVisible',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CustomerLocationRow = BusinessObjects.CustomerLocationRow || (BusinessObjects.CustomerLocationRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerLocationService;
        (function (CustomerLocationService) {
            CustomerLocationService.baseUrl = 'BusinessObjects/CustomerLocation';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerLocationService.Methods || (CustomerLocationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerLocationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CustomerLocationService.baseUrl + '/' + x;
            });
        })(CustomerLocationService = BusinessObjects.CustomerLocationService || (BusinessObjects.CustomerLocationService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'CustomerId';
            CustomerRow.nameProperty = 'Name';
            CustomerRow.localTextPrefix = 'BusinessObjects.Customer';
            CustomerRow.lookupKey = 'BusinessObjects.Customer';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Customer');
            }
            CustomerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            [
                'Date',
                'CustomerId',
                'Name',
                'FullName',
                'PhoneNumber',
                'Email',
                'Website',
                'Address',
                'AccountId',
                'Address2',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress',
                'LocationList'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = BusinessObjects.CustomerRow || (BusinessObjects.CustomerRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'BusinessObjects/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = BusinessObjects.CustomerService || (BusinessObjects.CustomerService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        (function (Gender) {
            Gender[Gender["Female"] = 1] = "Female";
            Gender[Gender["Male"] = 2] = "Male";
        })(BusinessObjects.Gender || (BusinessObjects.Gender = {}));
        var Gender = BusinessObjects.Gender;
        Serenity.Decorators.registerEnum(Gender, 'BusinessObjects.Gender');
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var MovementHistoryForm = (function (_super) {
            __extends(MovementHistoryForm, _super);
            function MovementHistoryForm() {
                _super.apply(this, arguments);
            }
            MovementHistoryForm.formKey = 'BusinessObjects.MovementHistory';
            return MovementHistoryForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.MovementHistoryForm = MovementHistoryForm;
        [['TransactionType', function () { return Serenity.StringEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }], ['PurchaseOrderId', function () { return Serenity.StringEditor; }], ['QuantityBefore', function () { return Serenity.StringEditor; }], ['Quantity', function () { return Serenity.StringEditor; }], ['QuantityAfter', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MovementHistoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var MovementHistoryRow;
        (function (MovementHistoryRow) {
            MovementHistoryRow.idProperty = 'MovementHistoryId';
            MovementHistoryRow.nameProperty = 'TransactionType';
            MovementHistoryRow.localTextPrefix = 'BusinessObjects.MovementHistory';
            var Fields;
            (function (Fields) {
            })(Fields = MovementHistoryRow.Fields || (MovementHistoryRow.Fields = {}));
            [
                'ProductId',
                'MovementHistoryId',
                'TransactionType',
                'Date',
                'LocationId',
                'QuantityBefore',
                'Quantity',
                'QuantityAfter',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId',
                'LocationIsVisible',
                'PurchaseId',
                'PurchaseOrderId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MovementHistoryRow = BusinessObjects.MovementHistoryRow || (BusinessObjects.MovementHistoryRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var MovementHistoryService;
        (function (MovementHistoryService) {
            MovementHistoryService.baseUrl = 'BusinessObjects/MovementHistory';
            var Methods;
            (function (Methods) {
            })(Methods = MovementHistoryService.Methods || (MovementHistoryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovementHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovementHistoryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MovementHistoryService.baseUrl + '/' + x;
            });
        })(MovementHistoryService = BusinessObjects.MovementHistoryService || (BusinessObjects.MovementHistoryService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NotesForm = (function (_super) {
            __extends(NotesForm, _super);
            function NotesForm() {
                _super.apply(this, arguments);
            }
            NotesForm.formKey = 'BusinessObjects.Notes';
            return NotesForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.NotesForm = NotesForm;
        [['PurchaseId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(NotesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NotesRow;
        (function (NotesRow) {
            NotesRow.idProperty = 'NoteId';
            NotesRow.nameProperty = 'Description';
            NotesRow.localTextPrefix = 'BusinessObjects.Notes';
            NotesRow.lookupKey = 'BusinessObjects.Notes';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Notes');
            }
            NotesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = NotesRow.Fields || (NotesRow.Fields = {}));
            [
                'NoteId',
                'PurchaseId',
                'Date',
                'Description'
            ].forEach(function (x) { return Fields[x] = x; });
        })(NotesRow = BusinessObjects.NotesRow || (BusinessObjects.NotesRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NotesService;
        (function (NotesService) {
            NotesService.baseUrl = 'BusinessObjects/Notes';
            var Methods;
            (function (Methods) {
            })(Methods = NotesService.Methods || (NotesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NotesService[x] = function (r, s, o) {
                    return Q.serviceRequest(NotesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = NotesService.baseUrl + '/' + x;
            });
        })(NotesService = BusinessObjects.NotesService || (BusinessObjects.NotesService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PickSalesOrderForm = (function (_super) {
            __extends(PickSalesOrderForm, _super);
            function PickSalesOrderForm() {
                _super.apply(this, arguments);
            }
            PickSalesOrderForm.formKey = 'BusinessObjects.PickSalesOrder';
            return PickSalesOrderForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.PickSalesOrderForm = PickSalesOrderForm;
        [['SalesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['SalesDetailsId', function () { return Serenity.IntegerEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['IsPicked', function () { return Serenity.BooleanEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['Cost', function () { return Serenity.DecimalEditor; }], ['QuantitySold', function () { return Serenity.DecimalEditor; }], ['CostOfGoodsSold', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }], ['SalesProfit', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(PickSalesOrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PickSalesOrderRow;
        (function (PickSalesOrderRow) {
            PickSalesOrderRow.idProperty = 'PickSalesOrderId';
            PickSalesOrderRow.localTextPrefix = 'BusinessObjects.PickSalesOrder';
            PickSalesOrderRow.lookupKey = 'BusinessObjects.PickSalesOrderRow';
            function getLookup() {
                return Q.getLookup('BusinessObjects.PickSalesOrderRow');
            }
            PickSalesOrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PickSalesOrderRow.Fields || (PickSalesOrderRow.Fields = {}));
            [
                'PickSalesOrderId',
                'SalesId',
                'ProductId',
                'SalesDetailsId',
                'Quantity',
                'Date',
                'IsPicked',
                'Amount',
                'UomAndPriceId',
                'UnitPrice',
                'Discount',
                'Cost',
                'QuantitySold',
                'CostOfGoodsSold',
                'LocationId',
                'SalesProfit',
                'SalesOrderId',
                'SalesDate',
                'SalesCustomerId',
                'SalesTotalAmount',
                'SalesTotalAmountPaid',
                'SalesTotalAmountLeft',
                'SalesCostOfGoodsSold',
                'SalesGrossProfit',
                'SalesHasSalesDetails',
                'SalesLocationId',
                'SalesIsIntegerTrailingOrderIdWithPrefixSo',
                'SalesStatus',
                'SalesIsOpen',
                'SalesIsInProgress',
                'SalesIsFullyPicked',
                'SalesIsFullyPaid',
                'SalesIsInvoiced',
                'SalesIsAdvanced',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PickSalesOrderRow = BusinessObjects.PickSalesOrderRow || (BusinessObjects.PickSalesOrderRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PickSalesOrderService;
        (function (PickSalesOrderService) {
            PickSalesOrderService.baseUrl = 'BusinessObjects/PickSalesOrder';
            var Methods;
            (function (Methods) {
            })(Methods = PickSalesOrderService.Methods || (PickSalesOrderService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PickSalesOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(PickSalesOrderService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PickSalesOrderService.baseUrl + '/' + x;
            });
        })(PickSalesOrderService = BusinessObjects.PickSalesOrderService || (BusinessObjects.PickSalesOrderService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PricingForm = (function (_super) {
            __extends(PricingForm, _super);
            function PricingForm() {
                _super.apply(this, arguments);
            }
            PricingForm.formKey = 'BusinessObjects.Pricing';
            return PricingForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.PricingForm = PricingForm;
        [['PurchasesUoMAndPriceList', function () { return BusinessObjects.PurchasesUoMAndPriceEditor; }]].forEach(function (x) { return Object.defineProperty(PricingForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryForm = (function (_super) {
            __extends(ProductCategoryForm, _super);
            function ProductCategoryForm() {
                _super.apply(this, arguments);
            }
            ProductCategoryForm.formKey = 'BusinessObjects.ProductCategory';
            return ProductCategoryForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ProductCategoryForm = ProductCategoryForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductCategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryLocationForm = (function (_super) {
            __extends(ProductCategoryLocationForm, _super);
            function ProductCategoryLocationForm() {
                _super.apply(this, arguments);
            }
            ProductCategoryLocationForm.formKey = 'BusinessObjects.ProductCategoryLocation';
            return ProductCategoryLocationForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ProductCategoryLocationForm = ProductCategoryLocationForm;
        [['ProductCategoryId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductCategoryLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryLocationRow;
        (function (ProductCategoryLocationRow) {
            ProductCategoryLocationRow.idProperty = 'ProdCatLoctnId';
            ProductCategoryLocationRow.localTextPrefix = 'BusinessObjects.ProductCategoryLocation';
            ProductCategoryLocationRow.lookupKey = 'BusinessObjects.ProductCategoryLocation';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ProductCategoryLocation');
            }
            ProductCategoryLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductCategoryLocationRow.Fields || (ProductCategoryLocationRow.Fields = {}));
            [
                'ProdCatLoctnId',
                'ProductCategoryId',
                'LocationId',
                'AccountId',
                'ProductCategoryCategoryName',
                'ProductCategoryDescription',
                'ProductCategoryAccountId',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId',
                'LocationIsVisible',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ProductCategoryLocationRow = BusinessObjects.ProductCategoryLocationRow || (BusinessObjects.ProductCategoryLocationRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryLocationService;
        (function (ProductCategoryLocationService) {
            ProductCategoryLocationService.baseUrl = 'BusinessObjects/ProductCategoryLocation';
            var Methods;
            (function (Methods) {
            })(Methods = ProductCategoryLocationService.Methods || (ProductCategoryLocationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductCategoryLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductCategoryLocationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ProductCategoryLocationService.baseUrl + '/' + x;
            });
        })(ProductCategoryLocationService = BusinessObjects.ProductCategoryLocationService || (BusinessObjects.ProductCategoryLocationService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryRow;
        (function (ProductCategoryRow) {
            ProductCategoryRow.idProperty = 'ProductCategoryId';
            ProductCategoryRow.nameProperty = 'CategoryName';
            ProductCategoryRow.localTextPrefix = 'BusinessObjects.ProductCategory';
            ProductCategoryRow.lookupKey = 'BusinessObjects.ProductCategory';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ProductCategory');
            }
            ProductCategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductCategoryRow.Fields || (ProductCategoryRow.Fields = {}));
            [
                'ProductCategoryId',
                'CategoryName',
                'Description',
                'AccountId',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress',
                'LocationList'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ProductCategoryRow = BusinessObjects.ProductCategoryRow || (BusinessObjects.ProductCategoryRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryService;
        (function (ProductCategoryService) {
            ProductCategoryService.baseUrl = 'BusinessObjects/ProductCategory';
            var Methods;
            (function (Methods) {
            })(Methods = ProductCategoryService.Methods || (ProductCategoryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductCategoryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ProductCategoryService.baseUrl + '/' + x;
            });
        })(ProductCategoryService = BusinessObjects.ProductCategoryService || (BusinessObjects.ProductCategoryService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                _super.apply(this, arguments);
            }
            ProductForm.formKey = 'BusinessObjects.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ProductForm = ProductForm;
        [['ProductId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['SupplierId', function () { return Serenity.LookupEditor; }], ['ProductCategoryId', function () { return Serenity.LookupEditor; }], ['ProductName', function () { return Serenity.StringEditor; }], ['ProductCode', function () { return Serenity.StringEditor; }], ['BrandName', function () { return Serenity.StringEditor; }], ['Barcode', function () { return Serenity.StringEditor; }], ['ReorderPoint', function () { return Serenity.IntegerEditor; }], ['ReorderQuantity', function () { return Serenity.IntegerEditor; }], ['LeastUnitName', function () { return Serenity.StringEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductForm2 = (function (_super) {
            __extends(ProductForm2, _super);
            function ProductForm2() {
                _super.apply(this, arguments);
            }
            ProductForm2.formKey = 'BusinessObjects.Product2';
            return ProductForm2;
        }(Serenity.PrefixedContext));
        BusinessObjects.ProductForm2 = ProductForm2;
        [['ProductId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['SupplierId', function () { return Serenity.LookupEditor; }], ['ProductCategoryId', function () { return Serenity.LookupEditor; }], ['ProductName', function () { return Serenity.StringEditor; }], ['ProductCode', function () { return Serenity.StringEditor; }], ['BrandName', function () { return Serenity.StringEditor; }], ['LeastUnitName', function () { return Serenity.StringEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }], ['PurchasesUoMAndPriceList', function () { return BusinessObjects.PurchasesUoMAndPriceEditor; }], ['SalesUoMAndPriceList', function () { return BusinessObjects.SalesUoMAndPriceEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm2.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationForm = (function (_super) {
            __extends(ProductLocationForm, _super);
            function ProductLocationForm() {
                _super.apply(this, arguments);
            }
            ProductLocationForm.formKey = 'BusinessObjects.ProductLocation';
            return ProductLocationForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ProductLocationForm = ProductLocationForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationRow;
        (function (ProductLocationRow) {
            ProductLocationRow.idProperty = 'ProductsLocationsId';
            ProductLocationRow.localTextPrefix = 'BusinessObjects.ProductLocation';
            ProductLocationRow.lookupKey = 'BusinessObjects.ProductLocation';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ProductLocation');
            }
            ProductLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductLocationRow.Fields || (ProductLocationRow.Fields = {}));
            [
                'ProductsLocationsId',
                'ProductId',
                'LocationId',
                'AccountId',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ProductLocationRow = BusinessObjects.ProductLocationRow || (BusinessObjects.ProductLocationRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationService;
        (function (ProductLocationService) {
            ProductLocationService.baseUrl = 'BusinessObjects/ProductLocation';
            var Methods;
            (function (Methods) {
            })(Methods = ProductLocationService.Methods || (ProductLocationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductLocationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ProductLocationService.baseUrl + '/' + x;
            });
        })(ProductLocationService = BusinessObjects.ProductLocationService || (BusinessObjects.ProductLocationService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductId';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'BusinessObjects.Product';
            ProductRow.lookupKey = 'BusinessObjects.Product';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Product');
            }
            ProductRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            [
                'ProductId',
                'Date',
                'ProductCode',
                'ProductName',
                'BrandName',
                'Barcode',
                'ReorderPoint',
                'ReorderQuantity',
                'ProductCategoryId',
                'SupplierId',
                'LeastUnitName',
                'AccountId',
                'ProductCategoryCategoryName',
                'ProductCategoryDescription',
                'ProductCategoryAccountId',
                'SupplierDate',
                'SupplierSupplierName',
                'SupplierPhoneNumber',
                'SupplierFax',
                'SupplierEmail',
                'SupplierWebsite',
                'SupplierAddress',
                'SupplierNote',
                'SupplierAccountId',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress',
                'PurchasesUoMAndPriceList',
                'SalesUoMAndPriceList',
                'ProductSupplierList',
                'Pricing',
                'LocationList'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = BusinessObjects.ProductRow || (BusinessObjects.ProductRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'BusinessObjects/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'AddSupplier'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = BusinessObjects.ProductService || (BusinessObjects.ProductService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductSupplierForm = (function (_super) {
            __extends(ProductSupplierForm, _super);
            function ProductSupplierForm() {
                _super.apply(this, arguments);
            }
            ProductSupplierForm.formKey = 'BusinessObjects.ProductSupplier';
            return ProductSupplierForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ProductSupplierForm = ProductSupplierForm;
        [['ProductId', function () { return Serenity.IntegerEditor; }], ['SupplierId', function () { return Serenity.IntegerEditor; }], ['SupplierList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductSupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductSupplierRow;
        (function (ProductSupplierRow) {
            ProductSupplierRow.idProperty = 'ProductSupplierId';
            ProductSupplierRow.localTextPrefix = 'BusinessObjects.ProductSupplier';
            var Fields;
            (function (Fields) {
            })(Fields = ProductSupplierRow.Fields || (ProductSupplierRow.Fields = {}));
            [
                'ProductSupplierId',
                'ProductId',
                'SupplierId',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId1',
                'ProductLeastUnitName',
                'ProductAccountId',
                'SupplierDate',
                'SupplierSupplierName',
                'SupplierPhoneNumber',
                'SupplierFax',
                'SupplierEmail',
                'SupplierWebsite',
                'SupplierAddress',
                'SupplierNote',
                'SupplierAccountId',
                'SupplierList'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ProductSupplierRow = BusinessObjects.ProductSupplierRow || (BusinessObjects.ProductSupplierRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductSupplierService;
        (function (ProductSupplierService) {
            ProductSupplierService.baseUrl = 'BusinessObjects/ProductSupplier';
            var Methods;
            (function (Methods) {
            })(Methods = ProductSupplierService.Methods || (ProductSupplierService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductSupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductSupplierService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ProductSupplierService.baseUrl + '/' + x;
            });
        })(ProductSupplierService = BusinessObjects.ProductSupplierService || (BusinessObjects.ProductSupplierService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesDetailsForm = (function (_super) {
            __extends(PurchasesDetailsForm, _super);
            function PurchasesDetailsForm() {
                _super.apply(this, arguments);
            }
            PurchasesDetailsForm.formKey = 'BusinessObjects.PurchasesDetails';
            return PurchasesDetailsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.PurchasesDetailsForm = PurchasesDetailsForm;
        [['PurchasesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['QuantityInLeastUnit', function () { return Serenity.DecimalEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }], ['IsReceived', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(PurchasesDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesDetailsRow;
        (function (PurchasesDetailsRow) {
            PurchasesDetailsRow.idProperty = 'PurchasesDetailsId';
            PurchasesDetailsRow.localTextPrefix = 'BusinessObjects.PurchasesDetails';
            PurchasesDetailsRow.lookupKey = 'BusinessObjects.PurchasesDetails';
            function getLookup() {
                return Q.getLookup('BusinessObjects.PurchasesDetails');
            }
            PurchasesDetailsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PurchasesDetailsRow.Fields || (PurchasesDetailsRow.Fields = {}));
            [
                'PurchasesDetailsId',
                'PurchasesId',
                'Date',
                'ProductId',
                'Quantity',
                'QuantityInLeastUnit',
                'UomAndPriceId',
                'UnitPrice',
                'Discount',
                'Amount',
                'LocationId',
                'IsReceived',
                'TotalQuantityInLeastUnit',
                'PurchasesOrderId',
                'PurchasesDate',
                'PurchasesSupplierId',
                'PurchasesTotalAmount',
                'PurchasesTotalAmountPaid',
                'PurchasesTotalAmountLeft',
                'PurchasesHasPurchasesDetails',
                'PurchasesLocationId',
                'PurchasesIsIntegerTrailingOrderIdWithPrefixPo',
                'PurchasesStatus',
                'PurchasesIsOpen',
                'PurchasesIsInProgress',
                'PurchasesIsFullyReceived',
                'PurchasesIsFullyPaid',
                'PurchasesIsAdvanced',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PurchasesDetailsRow = BusinessObjects.PurchasesDetailsRow || (BusinessObjects.PurchasesDetailsRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesDetailsService;
        (function (PurchasesDetailsService) {
            PurchasesDetailsService.baseUrl = 'BusinessObjects/PurchasesDetails';
            var Methods;
            (function (Methods) {
            })(Methods = PurchasesDetailsService.Methods || (PurchasesDetailsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchasesDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchasesDetailsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PurchasesDetailsService.baseUrl + '/' + x;
            });
        })(PurchasesDetailsService = BusinessObjects.PurchasesDetailsService || (BusinessObjects.PurchasesDetailsService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesForm = (function (_super) {
            __extends(PurchasesForm, _super);
            function PurchasesForm() {
                _super.apply(this, arguments);
            }
            PurchasesForm.formKey = 'BusinessObjects.Purchases';
            return PurchasesForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.PurchasesForm = PurchasesForm;
        [['PurchasesId', function () { return Serenity.IntegerEditor; }], ['OrderId', function () { return Serenity.StringEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['SupplierId', function () { return Serenity.LookupEditor; }], ['HasPurchasesDetails', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['IsIntegerTrailingOrderIdWithPrefixPo', function () { return Serenity.BooleanEditor; }], ['Status', function () { return Serenity.StringEditor; }], ['IsOpen', function () { return Serenity.BooleanEditor; }], ['IsInProgress', function () { return Serenity.BooleanEditor; }], ['IsFullyReceived', function () { return Serenity.BooleanEditor; }], ['IsFullyPaid', function () { return Serenity.BooleanEditor; }], ['IsAdvanced', function () { return Serenity.BooleanEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Tax', function () { return Serenity.DecimalEditor; }], ['TotalAmount', function () { return Serenity.DecimalEditor; }], ['TotalAmountPaid', function () { return Serenity.DecimalEditor; }], ['TotalAmountLeft', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(PurchasesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesPaymentDetailsForm = (function (_super) {
            __extends(PurchasesPaymentDetailsForm, _super);
            function PurchasesPaymentDetailsForm() {
                _super.apply(this, arguments);
            }
            PurchasesPaymentDetailsForm.formKey = 'BusinessObjects.PurchasesPaymentsDetails';
            return PurchasesPaymentDetailsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.PurchasesPaymentDetailsForm = PurchasesPaymentDetailsForm;
        [['PurchasesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['TotalAmount', function () { return Serenity.DecimalEditor; }], ['AmountPaid', function () { return Serenity.DecimalEditor; }], ['IsTotalAmountRow', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(PurchasesPaymentDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesPaymentDetailsRow;
        (function (PurchasesPaymentDetailsRow) {
            PurchasesPaymentDetailsRow.idProperty = 'PurchPymntDetailsId';
            PurchasesPaymentDetailsRow.localTextPrefix = 'BusinessObjects.PurchasesPaymentsDetails';
            PurchasesPaymentDetailsRow.lookupKey = 'BusinessObjects.PurchasesPaymentsDetails';
            function getLookup() {
                return Q.getLookup('BusinessObjects.PurchasesPaymentsDetails');
            }
            PurchasesPaymentDetailsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PurchasesPaymentDetailsRow.Fields || (PurchasesPaymentDetailsRow.Fields = {}));
            [
                'PurchPymntDetailsId',
                'PurchasesId',
                'Date',
                'TotalAmount',
                'AmountPaid',
                'AmountLeft',
                'IsTotalAmountRow',
                'LocationId',
                'PurchasesOrderId',
                'PurchasesDate',
                'PurchasesSupplierId',
                'PurchasesTotalAmount',
                'PurchasesTotalAmountPaid',
                'PurchasesTotalAmountLeft',
                'PurchasesHasPurchasesDetails',
                'PurchasesLocationId',
                'PurchasesIsIntegerTrailingOrderIdWithPrefixPo',
                'PurchasesStatus',
                'PurchasesIsOpen',
                'PurchasesIsInProgress',
                'PurchasesIsFullyReceived',
                'PurchasesIsFullyPaid',
                'PurchasesIsAdvanced'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PurchasesPaymentDetailsRow = BusinessObjects.PurchasesPaymentDetailsRow || (BusinessObjects.PurchasesPaymentDetailsRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesPaymentDetailsService;
        (function (PurchasesPaymentDetailsService) {
            PurchasesPaymentDetailsService.baseUrl = 'BusinessObjects/PurchasesPaymentsDetails';
            var Methods;
            (function (Methods) {
            })(Methods = PurchasesPaymentDetailsService.Methods || (PurchasesPaymentDetailsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchasesPaymentDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchasesPaymentDetailsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PurchasesPaymentDetailsService.baseUrl + '/' + x;
            });
        })(PurchasesPaymentDetailsService = BusinessObjects.PurchasesPaymentDetailsService || (BusinessObjects.PurchasesPaymentDetailsService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesRow;
        (function (PurchasesRow) {
            PurchasesRow.idProperty = 'PurchasesId';
            PurchasesRow.nameProperty = 'OrderId';
            PurchasesRow.localTextPrefix = 'BusinessObjects.Purchases';
            PurchasesRow.lookupKey = 'BusinessObjects.Purchases';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Purchases');
            }
            PurchasesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PurchasesRow.Fields || (PurchasesRow.Fields = {}));
            [
                'PurchasesId',
                'OrderId',
                'Date',
                'SupplierId',
                'TotalAmount',
                'TotalAmountPaid',
                'TotalAmountLeft',
                'HasPurchasesDetails',
                'LocationId',
                'IsIntegerTrailingOrderIdWithPrefixPo',
                'Status',
                'IsOpen',
                'IsInProgress',
                'IsFullyReceived',
                'IsFullyPaid',
                'IsAdvanced',
                'Discount',
                'Tax',
                'SupplierDate',
                'SupplierSupplierName',
                'SupplierPhoneNumber',
                'SupplierFax',
                'SupplierEmail',
                'SupplierWebsite',
                'SupplierAddress',
                'SupplierNote',
                'SupplierAccountId',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PurchasesRow = BusinessObjects.PurchasesRow || (BusinessObjects.PurchasesRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesService;
        (function (PurchasesService) {
            PurchasesService.baseUrl = 'BusinessObjects/Purchases';
            var Methods;
            (function (Methods) {
            })(Methods = PurchasesService.Methods || (PurchasesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetNextNumber',
                'CompletePurchase',
                'ReopenOrder',
                'ConvertToAdvancedPurchase',
                'ConvertToSimplePurchase'
            ].forEach(function (x) {
                PurchasesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchasesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PurchasesService.baseUrl + '/' + x;
            });
        })(PurchasesService = BusinessObjects.PurchasesService || (BusinessObjects.PurchasesService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesUoMAndPriceForm = (function (_super) {
            __extends(PurchasesUoMAndPriceForm, _super);
            function PurchasesUoMAndPriceForm() {
                _super.apply(this, arguments);
            }
            PurchasesUoMAndPriceForm.formKey = 'BusinessObjects.PurchasesUoMAndPrice';
            return PurchasesUoMAndPriceForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.PurchasesUoMAndPriceForm = PurchasesUoMAndPriceForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['UnitName', function () { return Serenity.StringEditor; }], ['UnitMakeUp', function () { return Serenity.IntegerEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(PurchasesUoMAndPriceForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesUoMAndPriceRow;
        (function (PurchasesUoMAndPriceRow) {
            PurchasesUoMAndPriceRow.idProperty = 'UomAndPriceId';
            PurchasesUoMAndPriceRow.nameProperty = 'UnitName';
            PurchasesUoMAndPriceRow.localTextPrefix = 'BusinessObjects.PurchasesUoMAndPrice';
            PurchasesUoMAndPriceRow.lookupKey = 'BusinessObjects.PurchasesUoMAndPrice';
            function getLookup() {
                return Q.getLookup('BusinessObjects.PurchasesUoMAndPrice');
            }
            PurchasesUoMAndPriceRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PurchasesUoMAndPriceRow.Fields || (PurchasesUoMAndPriceRow.Fields = {}));
            [
                'UomAndPriceId',
                'ProductId',
                'UnitName',
                'UnitMakeUp',
                'StandardUomid',
                'Discontinued',
                'Price',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'StandardUomidProductId',
                'StandardUomidStandardUnitName',
                'StandardUomidDiscontinued',
                'StandardUomidCost',
                'UnitOfMeasurement',
                'StandardUnitName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PurchasesUoMAndPriceRow = BusinessObjects.PurchasesUoMAndPriceRow || (BusinessObjects.PurchasesUoMAndPriceRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesUoMAndPriceService;
        (function (PurchasesUoMAndPriceService) {
            PurchasesUoMAndPriceService.baseUrl = 'BusinessObjects/PurchasesUoMAndPrice';
            var Methods;
            (function (Methods) {
            })(Methods = PurchasesUoMAndPriceService.Methods || (PurchasesUoMAndPriceService.Methods = {}));
            [
                'Create',
                'CreateAsChild',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchasesUoMAndPriceService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchasesUoMAndPriceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PurchasesUoMAndPriceService.baseUrl + '/' + x;
            });
        })(PurchasesUoMAndPriceService = BusinessObjects.PurchasesUoMAndPriceService || (BusinessObjects.PurchasesUoMAndPriceService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchaseTrailForm = (function (_super) {
            __extends(PurchaseTrailForm, _super);
            function PurchaseTrailForm() {
                _super.apply(this, arguments);
            }
            PurchaseTrailForm.formKey = 'BusinessObjects.PurchaseTrail';
            return PurchaseTrailForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.PurchaseTrailForm = PurchaseTrailForm;
        [['PurchasesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.IntegerEditor; }], ['UomAndPriceId', function () { return Serenity.IntegerEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['QuantityInLeastUnit', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }], ['IsReceived', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(PurchaseTrailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchaseTrailRow;
        (function (PurchaseTrailRow) {
            PurchaseTrailRow.idProperty = 'PurchasesTrailId';
            PurchaseTrailRow.localTextPrefix = 'BusinessObjects.PurchaseTrail';
            var Fields;
            (function (Fields) {
            })(Fields = PurchaseTrailRow.Fields || (PurchaseTrailRow.Fields = {}));
            [
                'PurchasesTrailId',
                'PurchasesId',
                'Date',
                'ProductId',
                'UomAndPriceId',
                'UnitPrice',
                'Discount',
                'Amount',
                'Quantity',
                'QuantityInLeastUnit',
                'LocationId',
                'IsReceived',
                'PurchasesOrderId',
                'PurchasesDate',
                'PurchasesSupplierId',
                'PurchasesTotalAmount',
                'PurchasesTotalAmountPaid',
                'PurchasesTotalAmountLeft',
                'PurchasesHasPurchasesDetails',
                'PurchasesLocationId',
                'PurchasesIsIntegerTrailingOrderIdWithPrefixPo',
                'PurchasesStatus',
                'PurchasesIsOpen',
                'PurchasesIsInProgress',
                'PurchasesIsFullyReceived',
                'PurchasesIsFullyPaid',
                'PurchasesIsAdvanced',
                'PurchasesTax',
                'PurchasesDiscount',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductBarcode',
                'ProductReorderPoint',
                'ProductReorderQuantity',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PurchaseTrailRow = BusinessObjects.PurchaseTrailRow || (BusinessObjects.PurchaseTrailRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchaseTrailService;
        (function (PurchaseTrailService) {
            PurchaseTrailService.baseUrl = 'BusinessObjects/PurchaseTrail';
            var Methods;
            (function (Methods) {
            })(Methods = PurchaseTrailService.Methods || (PurchaseTrailService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseTrailService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseTrailService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PurchaseTrailService.baseUrl + '/' + x;
            });
        })(PurchaseTrailService = BusinessObjects.PurchaseTrailService || (BusinessObjects.PurchaseTrailService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReceivePurchasesForm = (function (_super) {
            __extends(ReceivePurchasesForm, _super);
            function ReceivePurchasesForm() {
                _super.apply(this, arguments);
            }
            ReceivePurchasesForm.formKey = 'BusinessObjects.ReceivePurchases';
            return ReceivePurchasesForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ReceivePurchasesForm = ReceivePurchasesForm;
        [['PurchasesId', function () { return Serenity.IntegerEditor; }], ['PurchasesDetailsId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['QuantityInLeastUnit', function () { return Serenity.DecimalEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['IsReceived', function () { return Serenity.BooleanEditor; }], ['IsFree', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ReceivePurchasesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReceivePurchasesRow;
        (function (ReceivePurchasesRow) {
            ReceivePurchasesRow.idProperty = 'ReceivePurchasesId';
            ReceivePurchasesRow.localTextPrefix = 'BusinessObjects.ReceivePurchases';
            ReceivePurchasesRow.lookupKey = 'BusinessObjects.ReceivePurchases';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ReceivePurchases');
            }
            ReceivePurchasesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReceivePurchasesRow.Fields || (ReceivePurchasesRow.Fields = {}));
            [
                'ReceivePurchasesId',
                'PurchasesId',
                'ProductId',
                'PurchasesDetailsId',
                'Quantity',
                'QuantityInLeastUnit',
                'Date',
                'IsReceived',
                'IsFree',
                'Amount',
                'UnitPrice',
                'UomAndPriceId',
                'Discount',
                'LocationId',
                'TotalQuantityInLeastUnit',
                'PurchasesOrderId',
                'PurchasesDate',
                'PurchasesSupplierId',
                'PurchasesTotalAmount',
                'PurchasesTotalAmountPaid',
                'PurchasesTotalAmountLeft',
                'PurchasesHasPurchasesDetails',
                'PurchasesLocationId',
                'PurchasesIsIntegerTrailingOrderIdWithPrefixPo',
                'PurchasesStatus',
                'PurchasesIsOpen',
                'PurchasesIsInProgress',
                'PurchasesIsFullyReceived',
                'PurchasesIsFullyPaid',
                'PurchasesIsAdvanced',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ReceivePurchasesRow = BusinessObjects.ReceivePurchasesRow || (BusinessObjects.ReceivePurchasesRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReceivePurchasesService;
        (function (ReceivePurchasesService) {
            ReceivePurchasesService.baseUrl = 'BusinessObjects/ReceivePurchases';
            var Methods;
            (function (Methods) {
            })(Methods = ReceivePurchasesService.Methods || (ReceivePurchasesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'AutoFill'
            ].forEach(function (x) {
                ReceivePurchasesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReceivePurchasesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ReceivePurchasesService.baseUrl + '/' + x;
            });
        })(ReceivePurchasesService = BusinessObjects.ReceivePurchasesService || (BusinessObjects.ReceivePurchasesService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReorderPointForm = (function (_super) {
            __extends(ReorderPointForm, _super);
            function ReorderPointForm() {
                _super.apply(this, arguments);
            }
            ReorderPointForm.formKey = 'BusinessObjects.ReorderPoint';
            return ReorderPointForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ReorderPointForm = ReorderPointForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['ReorderPointValue', function () { return Serenity.DecimalEditor; }], ['UOMAndPriceId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ReorderPointForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReorderPointRow;
        (function (ReorderPointRow) {
            ReorderPointRow.idProperty = 'ReorderPointId';
            ReorderPointRow.localTextPrefix = 'BusinessObjects.ReorderPoint';
            ReorderPointRow.lookupKey = 'BusinessObjects.ReorderPoint';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ReorderPoint');
            }
            ReorderPointRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReorderPointRow.Fields || (ReorderPointRow.Fields = {}));
            [
                'ReorderPointId',
                'ProductId',
                'ReorderPointValue',
                'UOMAndPriceId',
                'QtyInLeastUnit',
                'LocationName',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ReorderPointRow = BusinessObjects.ReorderPointRow || (BusinessObjects.ReorderPointRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReorderPointService;
        (function (ReorderPointService) {
            ReorderPointService.baseUrl = 'BusinessObjects/ReorderPoint';
            var Methods;
            (function (Methods) {
            })(Methods = ReorderPointService.Methods || (ReorderPointService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ReOrder'
            ].forEach(function (x) {
                ReorderPointService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReorderPointService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ReorderPointService.baseUrl + '/' + x;
            });
        })(ReorderPointService = BusinessObjects.ReorderPointService || (BusinessObjects.ReorderPointService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var RestockForm = (function (_super) {
            __extends(RestockForm, _super);
            function RestockForm() {
                _super.apply(this, arguments);
            }
            RestockForm.formKey = 'BusinessObjects.Restock';
            return RestockForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.RestockForm = RestockForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['RtnInwardsDtlsId', function () { return Serenity.LookupEditor; }], ['SalesId', function () { return Serenity.IntegerEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['IsRestocked', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(RestockForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var RestockRow;
        (function (RestockRow) {
            RestockRow.idProperty = 'ReStockId';
            RestockRow.localTextPrefix = 'BusinessObjects.Restock';
            RestockRow.lookupKey = 'BusinessObjects.Restock';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Restock');
            }
            RestockRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RestockRow.Fields || (RestockRow.Fields = {}));
            [
                'ReStockId',
                'ProductId',
                'Date',
                'RtnInwardsDtlsId',
                'SalesId',
                'Quantity',
                'UomAndPriceId',
                'IsRestocked',
                'LocationId',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RestockRow = BusinessObjects.RestockRow || (BusinessObjects.RestockRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var RestockService;
        (function (RestockService) {
            RestockService.baseUrl = 'BusinessObjects/Restock';
            var Methods;
            (function (Methods) {
            })(Methods = RestockService.Methods || (RestockService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RestockService[x] = function (r, s, o) {
                    return Q.serviceRequest(RestockService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RestockService.baseUrl + '/' + x;
            });
        })(RestockService = BusinessObjects.RestockService || (BusinessObjects.RestockService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsDetailsForm = (function (_super) {
            __extends(ReturnInwardsDetailsForm, _super);
            function ReturnInwardsDetailsForm() {
                _super.apply(this, arguments);
            }
            ReturnInwardsDetailsForm.formKey = 'BusinessObjects.ReturnInwardsDetails';
            return ReturnInwardsDetailsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ReturnInwardsDetailsForm = ReturnInwardsDetailsForm;
        [['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['RtnInwardsId', function () { return Serenity.LookupEditor; }], ['SalesDetailsId', function () { return Serenity.LookupEditor; }], ['SalesId', function () { return Serenity.IntegerEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ReturnInwardsDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsDetailsRow;
        (function (ReturnInwardsDetailsRow) {
            ReturnInwardsDetailsRow.idProperty = 'RtnInwardsDtlsId';
            ReturnInwardsDetailsRow.localTextPrefix = 'BusinessObjects.ReturnInwardsDetails';
            ReturnInwardsDetailsRow.lookupKey = 'BusinessObjects.ReturnInwardsDetails';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ReturnInwardsDetails');
            }
            ReturnInwardsDetailsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReturnInwardsDetailsRow.Fields || (ReturnInwardsDetailsRow.Fields = {}));
            [
                'RtnInwardsDtlsId',
                'Date',
                'ProductId',
                'RtnInwardsId',
                'SalesDetailsId',
                'SalesId',
                'Quantity',
                'UnitPrice',
                'Amount',
                'Discount',
                'UomAndPriceId',
                'LocationId',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'RtnInwardsDate',
                'RtnInwardsSalesId',
                'RtnInwardsTotalAmount',
                'RtnInwardsTotalFee',
                'RtnInwardsTotalAmountRefunded',
                'RtnInwardsTotalCredit',
                'SalesDetailsSalesId',
                'SalesDetailsDate',
                'SalesDetailsProductId',
                'SalesDetailsUomAndPriceId',
                'SalesDetailsUnitPrice',
                'SalesDetailsDiscount',
                'SalesDetailsAmount',
                'SalesDetailsQuantity',
                'SalesDetailsLocationId',
                'SalesDetailsCost',
                'SalesDetailsIsPicked',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ReturnInwardsDetailsRow = BusinessObjects.ReturnInwardsDetailsRow || (BusinessObjects.ReturnInwardsDetailsRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsDetailsService;
        (function (ReturnInwardsDetailsService) {
            ReturnInwardsDetailsService.baseUrl = 'BusinessObjects/ReturnInwardsDetails';
            var Methods;
            (function (Methods) {
            })(Methods = ReturnInwardsDetailsService.Methods || (ReturnInwardsDetailsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReturnInwardsDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReturnInwardsDetailsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ReturnInwardsDetailsService.baseUrl + '/' + x;
            });
        })(ReturnInwardsDetailsService = BusinessObjects.ReturnInwardsDetailsService || (BusinessObjects.ReturnInwardsDetailsService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsForm = (function (_super) {
            __extends(ReturnInwardsForm, _super);
            function ReturnInwardsForm() {
                _super.apply(this, arguments);
            }
            ReturnInwardsForm.formKey = 'BusinessObjects.ReturnInwards';
            return ReturnInwardsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ReturnInwardsForm = ReturnInwardsForm;
        [['Date', function () { return Serenity.DateEditor; }], ['SalesId', function () { return Serenity.LookupEditor; }], ['TotalAmount', function () { return Serenity.DecimalEditor; }], ['TotalFee', function () { return Serenity.DecimalEditor; }], ['TotalAmountRefunded', function () { return Serenity.DecimalEditor; }], ['TotalCredit', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(ReturnInwardsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsPaymentForm = (function (_super) {
            __extends(ReturnInwardsPaymentForm, _super);
            function ReturnInwardsPaymentForm() {
                _super.apply(this, arguments);
            }
            ReturnInwardsPaymentForm.formKey = 'BusinessObjects.ReturnInwardsPayment';
            return ReturnInwardsPaymentForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ReturnInwardsPaymentForm = ReturnInwardsPaymentForm;
        [['RtnInwardsId', function () { return Serenity.LookupEditor; }], ['SalesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['AmountRefunded', function () { return Serenity.DecimalEditor; }], ['Fee', function () { return Serenity.DecimalEditor; }], ['Credit', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(ReturnInwardsPaymentForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsPaymentRow;
        (function (ReturnInwardsPaymentRow) {
            ReturnInwardsPaymentRow.idProperty = 'RtnInwardsPaymentId';
            ReturnInwardsPaymentRow.localTextPrefix = 'BusinessObjects.ReturnInwardsPayment';
            ReturnInwardsPaymentRow.lookupKey = 'BusinessObjects.ReturnInwardsPayment';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ReturnInwardsPayment');
            }
            ReturnInwardsPaymentRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReturnInwardsPaymentRow.Fields || (ReturnInwardsPaymentRow.Fields = {}));
            [
                'RtnInwardsPaymentId',
                'RtnInwardsId',
                'SalesId',
                'Date',
                'Amount',
                'AmountRefunded',
                'Fee',
                'Credit',
                'RtnInwardsDate',
                'RtnInwardsSalesId',
                'RtnInwardsTotalAmount',
                'RtnInwardsTotalFee',
                'RtnInwardsTotalAmountRefunded',
                'RtnInwardsTotalCredit'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ReturnInwardsPaymentRow = BusinessObjects.ReturnInwardsPaymentRow || (BusinessObjects.ReturnInwardsPaymentRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsPaymentService;
        (function (ReturnInwardsPaymentService) {
            ReturnInwardsPaymentService.baseUrl = 'BusinessObjects/ReturnInwardsPayment';
            var Methods;
            (function (Methods) {
            })(Methods = ReturnInwardsPaymentService.Methods || (ReturnInwardsPaymentService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReturnInwardsPaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReturnInwardsPaymentService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ReturnInwardsPaymentService.baseUrl + '/' + x;
            });
        })(ReturnInwardsPaymentService = BusinessObjects.ReturnInwardsPaymentService || (BusinessObjects.ReturnInwardsPaymentService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsRow;
        (function (ReturnInwardsRow) {
            ReturnInwardsRow.idProperty = 'RtnInwardsId';
            ReturnInwardsRow.localTextPrefix = 'BusinessObjects.ReturnInwards';
            ReturnInwardsRow.lookupKey = 'BusinessObjects.ReturnInwards';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ReturnInwards');
            }
            ReturnInwardsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReturnInwardsRow.Fields || (ReturnInwardsRow.Fields = {}));
            [
                'RtnInwardsId',
                'Date',
                'SalesId',
                'TotalAmount',
                'TotalFee',
                'TotalAmountRefunded',
                'TotalCredit',
                'SalesOrderId',
                'SalesDate',
                'SalesCustomerId',
                'SalesTotalAmount',
                'SalesTotalAmountPaid',
                'SalesTotalAmountLeft',
                'SalesCostOfGoodsSold',
                'SalesGrossProfit',
                'SalesHasSalesDetails',
                'SalesLocationId',
                'SalesIsIntegerTrailingOrderIdWithPrefixSo',
                'SalesStatus',
                'SalesIsOpen',
                'SalesIsInProgress',
                'SalesIsFullyPicked',
                'SalesIsFullyPaid',
                'SalesIsInvoiced',
                'SalesIsAdvanced'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ReturnInwardsRow = BusinessObjects.ReturnInwardsRow || (BusinessObjects.ReturnInwardsRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsService;
        (function (ReturnInwardsService) {
            ReturnInwardsService.baseUrl = 'BusinessObjects/ReturnInwards';
            var Methods;
            (function (Methods) {
            })(Methods = ReturnInwardsService.Methods || (ReturnInwardsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReturnInwardsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReturnInwardsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ReturnInwardsService.baseUrl + '/' + x;
            });
        })(ReturnInwardsService = BusinessObjects.ReturnInwardsService || (BusinessObjects.ReturnInwardsService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsDetailsForm = (function (_super) {
            __extends(ReturnOutwardsDetailsForm, _super);
            function ReturnOutwardsDetailsForm() {
                _super.apply(this, arguments);
            }
            ReturnOutwardsDetailsForm.formKey = 'BusinessObjects.ReturnOutwardsDetails';
            return ReturnOutwardsDetailsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ReturnOutwardsDetailsForm = ReturnOutwardsDetailsForm;
        [['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['RtnOutwardsId', function () { return Serenity.LookupEditor; }], ['PurchasesDetailsId', function () { return Serenity.IntegerEditor; }], ['PurchasesId', function () { return Serenity.IntegerEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['QuantityInLeastUnit', function () { return Serenity.DecimalEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ReturnOutwardsDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsDetailsRow;
        (function (ReturnOutwardsDetailsRow) {
            ReturnOutwardsDetailsRow.idProperty = 'RtnOutwardsDtlsId';
            ReturnOutwardsDetailsRow.nameProperty = 'ProductProductName';
            ReturnOutwardsDetailsRow.localTextPrefix = 'BusinessObjects.ReturnOutwardsDetails';
            ReturnOutwardsDetailsRow.lookupKey = 'BusinessObjects.ReturnOutwardsDetails';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ReturnOutwardsDetails');
            }
            ReturnOutwardsDetailsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReturnOutwardsDetailsRow.Fields || (ReturnOutwardsDetailsRow.Fields = {}));
            [
                'RtnOutwardsDtlsId',
                'Date',
                'ProductId',
                'RtnOutwardsId',
                'PurchasesDetailsId',
                'PurchasesId',
                'Quantity',
                'QuantityInLeastUnit',
                'UnitPrice',
                'Amount',
                'Discount',
                'UomAndPriceId',
                'LocationId',
                'SumQuantity',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'RtnOutwardsDate',
                'RtnOutwardsPurchasesId',
                'RtnOutwardsTotalAmount',
                'RtnOutwardsTotalFee',
                'RtnOutwardsTotalAmountRefunded',
                'RtnOutwardsTotalCredit',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ReturnOutwardsDetailsRow = BusinessObjects.ReturnOutwardsDetailsRow || (BusinessObjects.ReturnOutwardsDetailsRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsDetailsService;
        (function (ReturnOutwardsDetailsService) {
            ReturnOutwardsDetailsService.baseUrl = 'BusinessObjects/ReturnOutwardsDetails';
            var Methods;
            (function (Methods) {
            })(Methods = ReturnOutwardsDetailsService.Methods || (ReturnOutwardsDetailsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReturnOutwardsDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReturnOutwardsDetailsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ReturnOutwardsDetailsService.baseUrl + '/' + x;
            });
        })(ReturnOutwardsDetailsService = BusinessObjects.ReturnOutwardsDetailsService || (BusinessObjects.ReturnOutwardsDetailsService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsForm = (function (_super) {
            __extends(ReturnOutwardsForm, _super);
            function ReturnOutwardsForm() {
                _super.apply(this, arguments);
            }
            ReturnOutwardsForm.formKey = 'BusinessObjects.ReturnOutwards';
            return ReturnOutwardsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ReturnOutwardsForm = ReturnOutwardsForm;
        [['Date', function () { return Serenity.DateEditor; }], ['PurchasesId', function () { return Serenity.LookupEditor; }], ['TotalAmount', function () { return Serenity.DecimalEditor; }], ['TotalFee', function () { return Serenity.DecimalEditor; }], ['TotalAmountRefunded', function () { return Serenity.DecimalEditor; }], ['TotalCredit', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(ReturnOutwardsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsPaymentForm = (function (_super) {
            __extends(ReturnOutwardsPaymentForm, _super);
            function ReturnOutwardsPaymentForm() {
                _super.apply(this, arguments);
            }
            ReturnOutwardsPaymentForm.formKey = 'BusinessObjects.ReturnOutwardsPayments';
            return ReturnOutwardsPaymentForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ReturnOutwardsPaymentForm = ReturnOutwardsPaymentForm;
        [['RtnOutwardsId', function () { return Serenity.LookupEditor; }], ['PurchasesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['AmountRefunded', function () { return Serenity.DecimalEditor; }], ['Fee', function () { return Serenity.DecimalEditor; }], ['Credit', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(ReturnOutwardsPaymentForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsPaymentRow;
        (function (ReturnOutwardsPaymentRow) {
            ReturnOutwardsPaymentRow.idProperty = 'RtnOutwardsPaymentId';
            ReturnOutwardsPaymentRow.localTextPrefix = 'BusinessObjects.ReturnOutwardsPayments';
            ReturnOutwardsPaymentRow.lookupKey = 'BusinessObjects.ReturnOutwardsPayments';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ReturnOutwardsPayments');
            }
            ReturnOutwardsPaymentRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReturnOutwardsPaymentRow.Fields || (ReturnOutwardsPaymentRow.Fields = {}));
            [
                'RtnOutwardsPaymentId',
                'RtnOutwardsId',
                'PurchasesId',
                'Date',
                'Amount',
                'AmountRefunded',
                'Fee',
                'Credit',
                'RtnOutwardsDate',
                'RtnOutwardsPurchasesId',
                'RtnOutwardsTotalAmount',
                'RtnOutwardsTotalFee',
                'RtnOutwardsTotalAmountRefunded',
                'RtnOutwardsTotalCredit'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ReturnOutwardsPaymentRow = BusinessObjects.ReturnOutwardsPaymentRow || (BusinessObjects.ReturnOutwardsPaymentRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsPaymentService;
        (function (ReturnOutwardsPaymentService) {
            ReturnOutwardsPaymentService.baseUrl = 'BusinessObjects/ReturnOutwardsPayments';
            var Methods;
            (function (Methods) {
            })(Methods = ReturnOutwardsPaymentService.Methods || (ReturnOutwardsPaymentService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReturnOutwardsPaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReturnOutwardsPaymentService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ReturnOutwardsPaymentService.baseUrl + '/' + x;
            });
        })(ReturnOutwardsPaymentService = BusinessObjects.ReturnOutwardsPaymentService || (BusinessObjects.ReturnOutwardsPaymentService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsRow;
        (function (ReturnOutwardsRow) {
            ReturnOutwardsRow.idProperty = 'RtnOutwardsId';
            ReturnOutwardsRow.localTextPrefix = 'BusinessObjects.ReturnOutwards';
            ReturnOutwardsRow.lookupKey = 'BusinessObjects.ReturnOutwards';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ReturnOutwards');
            }
            ReturnOutwardsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReturnOutwardsRow.Fields || (ReturnOutwardsRow.Fields = {}));
            [
                'RtnOutwardsId',
                'Date',
                'PurchasesId',
                'TotalAmount',
                'TotalFee',
                'TotalAmountRefunded',
                'TotalCredit',
                'PurchasesOrderId',
                'PurchasesDate',
                'PurchasesSupplierId',
                'PurchasesTotalAmount',
                'PurchasesTotalAmountPaid',
                'PurchasesTotalAmountLeft',
                'PurchasesHasPurchasesDetails',
                'PurchasesLocationId',
                'PurchasesIsIntegerTrailingOrderIdWithPrefixPo',
                'PurchasesStatus',
                'PurchasesIsOpen',
                'PurchasesIsInProgress',
                'PurchasesIsFullyReceived',
                'PurchasesIsFullyPaid',
                'PurchasesIsAdvanced'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ReturnOutwardsRow = BusinessObjects.ReturnOutwardsRow || (BusinessObjects.ReturnOutwardsRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsService;
        (function (ReturnOutwardsService) {
            ReturnOutwardsService.baseUrl = 'BusinessObjects/ReturnOutwards';
            var Methods;
            (function (Methods) {
            })(Methods = ReturnOutwardsService.Methods || (ReturnOutwardsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReturnOutwardsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReturnOutwardsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ReturnOutwardsService.baseUrl + '/' + x;
            });
        })(ReturnOutwardsService = BusinessObjects.ReturnOutwardsService || (BusinessObjects.ReturnOutwardsService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesDetailsForm = (function (_super) {
            __extends(SalesDetailsForm, _super);
            function SalesDetailsForm() {
                _super.apply(this, arguments);
            }
            SalesDetailsForm.formKey = 'BusinessObjects.SalesDetails';
            return SalesDetailsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SalesDetailsForm = SalesDetailsForm;
        [['SalesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(SalesDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesDetailsRow;
        (function (SalesDetailsRow) {
            SalesDetailsRow.idProperty = 'SalesDetailsId';
            SalesDetailsRow.localTextPrefix = 'BusinessObjects.SalesDetails';
            SalesDetailsRow.lookupKey = 'BusinessObjects.SalesDetails';
            function getLookup() {
                return Q.getLookup('BusinessObjects.SalesDetails');
            }
            SalesDetailsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SalesDetailsRow.Fields || (SalesDetailsRow.Fields = {}));
            [
                'SalesDetailsId',
                'SalesId',
                'Date',
                'ProductId',
                'UomAndPriceId',
                'UnitPrice',
                'Discount',
                'Amount',
                'Quantity',
                'LocationId',
                'Cost',
                'IsPicked',
                'SalesOrderId',
                'SalesDate',
                'SalesCustomerId',
                'SalesTotalAmount',
                'SalesTotalAmountPaid',
                'SalesTotalAmountLeft',
                'SalesCostOfGoodsSold',
                'SalesGrossProfit',
                'SalesHasSalesDetails',
                'SalesLocationId',
                'SalesIsIntegerTrailingOrderIdWithPrefixSo',
                'SalesStatus',
                'SalesIsOpen',
                'SalesIsInProgress',
                'SalesIsFullyPicked',
                'SalesIsFullyPaid',
                'SalesIsInvoiced',
                'SalesIsAdvanced',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SalesDetailsRow = BusinessObjects.SalesDetailsRow || (BusinessObjects.SalesDetailsRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesDetailsService;
        (function (SalesDetailsService) {
            SalesDetailsService.baseUrl = 'BusinessObjects/SalesDetails';
            var Methods;
            (function (Methods) {
            })(Methods = SalesDetailsService.Methods || (SalesDetailsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesDetailsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SalesDetailsService.baseUrl + '/' + x;
            });
        })(SalesDetailsService = BusinessObjects.SalesDetailsService || (BusinessObjects.SalesDetailsService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesForm = (function (_super) {
            __extends(SalesForm, _super);
            function SalesForm() {
                _super.apply(this, arguments);
            }
            SalesForm.formKey = 'BusinessObjects.Sales';
            return SalesForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SalesForm = SalesForm;
        [['SalesId', function () { return Serenity.IntegerEditor; }], ['OrderId', function () { return Serenity.StringEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['CustomerId', function () { return Serenity.LookupEditor; }], ['TotalAmount', function () { return Serenity.DecimalEditor; }], ['TotalAmountPaid', function () { return Serenity.DecimalEditor; }], ['TotalAmountLeft', function () { return Serenity.DecimalEditor; }], ['CostOfGoodsSold', function () { return Serenity.DecimalEditor; }], ['HasSalesDetails', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['Status', function () { return Serenity.StringEditor; }], ['IsOpen', function () { return Serenity.BooleanEditor; }], ['IsInProgress', function () { return Serenity.BooleanEditor; }], ['IsFullyPicked', function () { return Serenity.BooleanEditor; }], ['IsFullyPaid', function () { return Serenity.BooleanEditor; }], ['IsInvoiced', function () { return Serenity.BooleanEditor; }], ['IsAdvanced', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(SalesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesInvoiceForm = (function (_super) {
            __extends(SalesInvoiceForm, _super);
            function SalesInvoiceForm() {
                _super.apply(this, arguments);
            }
            SalesInvoiceForm.formKey = 'BusinessObjects.SalesInvoice';
            return SalesInvoiceForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SalesInvoiceForm = SalesInvoiceForm;
        [['SalesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['SalesDetailsId', function () { return Serenity.IntegerEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['IsPicked', function () { return Serenity.BooleanEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }], ['PickSalesOrderId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(SalesInvoiceForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesInvoiceRow;
        (function (SalesInvoiceRow) {
            SalesInvoiceRow.idProperty = 'SalesInvoiceId';
            SalesInvoiceRow.localTextPrefix = 'BusinessObjects.SalesInvoice';
            SalesInvoiceRow.lookupKey = 'BusinessObjects.SalesInvoiceRow';
            function getLookup() {
                return Q.getLookup('BusinessObjects.SalesInvoiceRow');
            }
            SalesInvoiceRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SalesInvoiceRow.Fields || (SalesInvoiceRow.Fields = {}));
            [
                'SalesInvoiceId',
                'SalesId',
                'ProductId',
                'SalesDetailsId',
                'Quantity',
                'Date',
                'IsPicked',
                'Amount',
                'UomAndPriceId',
                'Discount',
                'LocationId',
                'PickSalesOrderId',
                'UnitPrice',
                'SalesOrderId',
                'SalesDate',
                'SalesCustomerId',
                'SalesTotalAmount',
                'SalesTotalAmountPaid',
                'SalesTotalAmountLeft',
                'SalesCostOfGoodsSold',
                'SalesGrossProfit',
                'SalesHasSalesDetails',
                'SalesLocationId',
                'SalesIsIntegerTrailingOrderIdWithPrefixSo',
                'SalesStatus',
                'SalesIsOpen',
                'SalesIsInProgress',
                'SalesIsFullyPicked',
                'SalesIsFullyPaid',
                'SalesIsInvoiced',
                'SalesIsAdvanced',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SalesInvoiceRow = BusinessObjects.SalesInvoiceRow || (BusinessObjects.SalesInvoiceRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesInvoiceService;
        (function (SalesInvoiceService) {
            SalesInvoiceService.baseUrl = 'BusinessObjects/SalesInvoice';
            var Methods;
            (function (Methods) {
            })(Methods = SalesInvoiceService.Methods || (SalesInvoiceService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesInvoiceService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesInvoiceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SalesInvoiceService.baseUrl + '/' + x;
            });
        })(SalesInvoiceService = BusinessObjects.SalesInvoiceService || (BusinessObjects.SalesInvoiceService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesPaymentDetailsForm = (function (_super) {
            __extends(SalesPaymentDetailsForm, _super);
            function SalesPaymentDetailsForm() {
                _super.apply(this, arguments);
            }
            SalesPaymentDetailsForm.formKey = 'BusinessObjects.SalesPaymentDetails';
            return SalesPaymentDetailsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SalesPaymentDetailsForm = SalesPaymentDetailsForm;
        [['SalesId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['TotalAmount', function () { return Serenity.DecimalEditor; }], ['AmountPaid', function () { return Serenity.DecimalEditor; }], ['AmountLeft', function () { return Serenity.DecimalEditor; }], ['IsTotalAmountRow', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['PaymentMode', function () { return Serenity.StringEditor; }], ['BankId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(SalesPaymentDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesPaymentDetailsRow;
        (function (SalesPaymentDetailsRow) {
            SalesPaymentDetailsRow.idProperty = 'SalesPymntDetailsId';
            SalesPaymentDetailsRow.nameProperty = 'PaymentMode';
            SalesPaymentDetailsRow.localTextPrefix = 'BusinessObjects.SalesPaymentDetails';
            SalesPaymentDetailsRow.lookupKey = 'BusinessObjects.SalesPaymentDetails';
            function getLookup() {
                return Q.getLookup('BusinessObjects.SalesPaymentDetails');
            }
            SalesPaymentDetailsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SalesPaymentDetailsRow.Fields || (SalesPaymentDetailsRow.Fields = {}));
            [
                'SalesPymntDetailsId',
                'SalesId',
                'Date',
                'TotalAmount',
                'AmountPaid',
                'AmountLeft',
                'IsTotalAmountRow',
                'LocationId',
                'PaymentMode',
                'BankId',
                'SalesOrderId',
                'SalesDate',
                'SalesCustomerId',
                'SalesTotalAmount',
                'SalesTotalAmountPaid',
                'SalesTotalAmountLeft',
                'SalesCostOfGoodsSold',
                'SalesGrossProfit',
                'SalesHasSalesDetails',
                'SalesLocationId',
                'SalesIsIntegerTrailingOrderIdWithPrefixSo',
                'SalesStatus',
                'SalesIsOpen',
                'SalesIsInProgress',
                'SalesIsFullyPicked',
                'SalesIsFullyPaid',
                'SalesIsInvoiced',
                'SalesIsAdvanced',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId',
                'BankDate',
                'BankBankName',
                'BankAccountId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SalesPaymentDetailsRow = BusinessObjects.SalesPaymentDetailsRow || (BusinessObjects.SalesPaymentDetailsRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesPaymentDetailsService;
        (function (SalesPaymentDetailsService) {
            SalesPaymentDetailsService.baseUrl = 'BusinessObjects/SalesPaymentDetails';
            var Methods;
            (function (Methods) {
            })(Methods = SalesPaymentDetailsService.Methods || (SalesPaymentDetailsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesPaymentDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesPaymentDetailsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SalesPaymentDetailsService.baseUrl + '/' + x;
            });
        })(SalesPaymentDetailsService = BusinessObjects.SalesPaymentDetailsService || (BusinessObjects.SalesPaymentDetailsService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesRow;
        (function (SalesRow) {
            SalesRow.idProperty = 'SalesId';
            SalesRow.nameProperty = 'OrderId';
            SalesRow.localTextPrefix = 'BusinessObjects.Sales';
            SalesRow.lookupKey = 'BusinessObjects.Sales';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Sales');
            }
            SalesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SalesRow.Fields || (SalesRow.Fields = {}));
            [
                'SalesId',
                'OrderId',
                'Date',
                'CustomerId',
                'TotalAmount',
                'TotalAmountPaid',
                'TotalAmountLeft',
                'CostOfGoodsSold',
                'GrossProfit',
                'HasSalesDetails',
                'LocationId',
                'IsIntegerTrailingOrderIdWithPrefixSo',
                'Status',
                'IsOpen',
                'IsInProgress',
                'IsFullyPicked',
                'IsFullyPaid',
                'IsInvoiced',
                'IsAdvanced',
                'CustomerName',
                'CustomerPhoneNumber',
                'CustomerEmail',
                'CustomerWebsite',
                'CustomerAddress',
                'CustomerAccountId',
                'CustomerAddress2',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SalesRow = BusinessObjects.SalesRow || (BusinessObjects.SalesRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesService;
        (function (SalesService) {
            SalesService.baseUrl = 'BusinessObjects/Sales';
            var Methods;
            (function (Methods) {
            })(Methods = SalesService.Methods || (SalesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetNextNumber',
                'CompleteSales',
                'ReopenOrder',
                'ConvertToAdvancedSales',
                'ConvertToSimpleSales'
            ].forEach(function (x) {
                SalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SalesService.baseUrl + '/' + x;
            });
        })(SalesService = BusinessObjects.SalesService || (BusinessObjects.SalesService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesUoMAndPriceForm = (function (_super) {
            __extends(SalesUoMAndPriceForm, _super);
            function SalesUoMAndPriceForm() {
                _super.apply(this, arguments);
            }
            SalesUoMAndPriceForm.formKey = 'BusinessObjects.SalesUoMAndPrice';
            return SalesUoMAndPriceForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SalesUoMAndPriceForm = SalesUoMAndPriceForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['UnitName', function () { return Serenity.StringEditor; }], ['UnitMakeUp', function () { return Serenity.IntegerEditor; }], ['StandardUomid', function () { return Serenity.LookupEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(SalesUoMAndPriceForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesUoMAndPriceRow;
        (function (SalesUoMAndPriceRow) {
            SalesUoMAndPriceRow.idProperty = 'UomAndPriceId';
            SalesUoMAndPriceRow.nameProperty = 'UnitName';
            SalesUoMAndPriceRow.localTextPrefix = 'BusinessObjects.SalesUoMAndPrice';
            SalesUoMAndPriceRow.lookupKey = 'BusinessObjects.SalesUoMAndPrice';
            function getLookup() {
                return Q.getLookup('BusinessObjects.SalesUoMAndPrice');
            }
            SalesUoMAndPriceRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SalesUoMAndPriceRow.Fields || (SalesUoMAndPriceRow.Fields = {}));
            [
                'UomAndPriceId',
                'ProductId',
                'UnitName',
                'UnitMakeUp',
                'StandardUomid',
                'Discontinued',
                'Price',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'StandardUomidProductId',
                'StandardUomidStandardUnitName',
                'StandardUomidDiscontinued',
                'StandardUomidCost'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SalesUoMAndPriceRow = BusinessObjects.SalesUoMAndPriceRow || (BusinessObjects.SalesUoMAndPriceRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesUoMAndPriceService;
        (function (SalesUoMAndPriceService) {
            SalesUoMAndPriceService.baseUrl = 'BusinessObjects/SalesUoMAndPrice';
            var Methods;
            (function (Methods) {
            })(Methods = SalesUoMAndPriceService.Methods || (SalesUoMAndPriceService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesUoMAndPriceService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesUoMAndPriceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SalesUoMAndPriceService.baseUrl + '/' + x;
            });
        })(SalesUoMAndPriceService = BusinessObjects.SalesUoMAndPriceService || (BusinessObjects.SalesUoMAndPriceService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StandardUoMForm = (function (_super) {
            __extends(StandardUoMForm, _super);
            function StandardUoMForm() {
                _super.apply(this, arguments);
            }
            StandardUoMForm.formKey = 'BusinessObjects.StandardUoM';
            return StandardUoMForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.StandardUoMForm = StandardUoMForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['StandardUnitName', function () { return Serenity.StringEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['Cost', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(StandardUoMForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StandardUoMRow;
        (function (StandardUoMRow) {
            StandardUoMRow.idProperty = 'StandardUomid';
            StandardUoMRow.nameProperty = 'StandardUnitName';
            StandardUoMRow.localTextPrefix = 'BusinessObjects.StandardUoM';
            StandardUoMRow.lookupKey = 'BusinessObjects.StandardUoM';
            function getLookup() {
                return Q.getLookup('BusinessObjects.StandardUoM');
            }
            StandardUoMRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = StandardUoMRow.Fields || (StandardUoMRow.Fields = {}));
            [
                'StandardUomid',
                'ProductId',
                'StandardUnitName',
                'Discontinued',
                'Cost',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(StandardUoMRow = BusinessObjects.StandardUoMRow || (BusinessObjects.StandardUoMRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StandardUoMService;
        (function (StandardUoMService) {
            StandardUoMService.baseUrl = 'BusinessObjects/StandardUoM';
            var Methods;
            (function (Methods) {
            })(Methods = StandardUoMService.Methods || (StandardUoMService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StandardUoMService[x] = function (r, s, o) {
                    return Q.serviceRequest(StandardUoMService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = StandardUoMService.baseUrl + '/' + x;
            });
        })(StandardUoMService = BusinessObjects.StandardUoMService || (BusinessObjects.StandardUoMService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StockForm = (function (_super) {
            __extends(StockForm, _super);
            function StockForm() {
                _super.apply(this, arguments);
            }
            StockForm.formKey = 'BusinessObjects.Stock';
            return StockForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.StockForm = StockForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(StockForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StockRow;
        (function (StockRow) {
            StockRow.idProperty = 'StockId';
            StockRow.nameProperty = 'ProductProductName';
            StockRow.localTextPrefix = 'BusinessObjects.Stock';
            StockRow.lookupKey = 'BusinessObjects.Stock';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Stock');
            }
            StockRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = StockRow.Fields || (StockRow.Fields = {}));
            [
                'StockId',
                'ProductId',
                'Quantity',
                'DummyQuantity',
                'QuantityInUnit',
                'LocationId',
                'DummyLocationId',
                'UomAndPriceId',
                'ActionKey',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId',
                'ProductCategory'
            ].forEach(function (x) { return Fields[x] = x; });
        })(StockRow = BusinessObjects.StockRow || (BusinessObjects.StockRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StockService;
        (function (StockService) {
            StockService.baseUrl = 'BusinessObjects/Stock';
            var Methods;
            (function (Methods) {
            })(Methods = StockService.Methods || (StockService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StockService[x] = function (r, s, o) {
                    return Q.serviceRequest(StockService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = StockService.baseUrl + '/' + x;
            });
        })(StockService = BusinessObjects.StockService || (BusinessObjects.StockService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierForm = (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                _super.apply(this, arguments);
            }
            SupplierForm.formKey = 'BusinessObjects.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SupplierForm = SupplierForm;
        [['SupplierId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['SupplierName', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['Website', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.TextAreaEditor; }], ['Note', function () { return Serenity.TextAreaEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierLocationForm = (function (_super) {
            __extends(SupplierLocationForm, _super);
            function SupplierLocationForm() {
                _super.apply(this, arguments);
            }
            SupplierLocationForm.formKey = 'BusinessObjects.SupplierLocation';
            return SupplierLocationForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SupplierLocationForm = SupplierLocationForm;
        [['SupplierId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierLocationRow;
        (function (SupplierLocationRow) {
            SupplierLocationRow.idProperty = 'SuppliersLocationsId';
            SupplierLocationRow.localTextPrefix = 'BusinessObjects.SupplierLocation';
            SupplierLocationRow.lookupKey = 'BusinessObjects.SupplierLocation';
            function getLookup() {
                return Q.getLookup('BusinessObjects.SupplierLocation');
            }
            SupplierLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupplierLocationRow.Fields || (SupplierLocationRow.Fields = {}));
            [
                'SuppliersLocationsId',
                'SupplierId',
                'LocationId',
                'AccountId',
                'SupplierDate',
                'SupplierSupplierName',
                'SupplierPhoneNumber',
                'SupplierFax',
                'SupplierEmail',
                'SupplierWebsite',
                'SupplierAddress',
                'SupplierNote',
                'SupplierAccountId',
                'LocationAccountId',
                'LocationDate',
                'LocationPhoneNumber',
                'LocationEmail',
                'LocationWebsite',
                'LocationLocationName',
                'LocationAddress',
                'LocationUserId',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SupplierLocationRow = BusinessObjects.SupplierLocationRow || (BusinessObjects.SupplierLocationRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierLocationService;
        (function (SupplierLocationService) {
            SupplierLocationService.baseUrl = 'BusinessObjects/SupplierLocation';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierLocationService.Methods || (SupplierLocationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierLocationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SupplierLocationService.baseUrl + '/' + x;
            });
        })(SupplierLocationService = BusinessObjects.SupplierLocationService || (BusinessObjects.SupplierLocationService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierId';
            SupplierRow.nameProperty = 'SupplierName';
            SupplierRow.localTextPrefix = 'BusinessObjects.Supplier';
            SupplierRow.lookupKey = 'BusinessObjects.Supplier';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            [
                'SupplierId',
                'Date',
                'SupplierName',
                'PhoneNumber',
                'Fax',
                'Email',
                'Website',
                'Address',
                'Note',
                'AccountId',
                'AccountDate',
                'AccountCompanyName',
                'AccountLogo',
                'AccountAddress',
                'AccountEmail',
                'AccountPhoneNumber',
                'AccountWebsiteAddress',
                'LocationList'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = BusinessObjects.SupplierRow || (BusinessObjects.SupplierRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'BusinessObjects/Supplier';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierService.Methods || (SupplierService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SupplierService.baseUrl + '/' + x;
            });
        })(SupplierService = BusinessObjects.SupplierService || (BusinessObjects.SupplierService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransferStockForm = (function (_super) {
            __extends(TransferStockForm, _super);
            function TransferStockForm() {
                _super.apply(this, arguments);
            }
            TransferStockForm.formKey = 'BusinessObjects.TransferStock';
            return TransferStockForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TransferStockForm = TransferStockForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['DummyQuantity', function () { return Serenity.DecimalEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['DummyLocationId', function () { return Serenity.LookupEditor; }], ['ActionKey', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TransferStockForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var UnstockForm = (function (_super) {
            __extends(UnstockForm, _super);
            function UnstockForm() {
                _super.apply(this, arguments);
            }
            UnstockForm.formKey = 'BusinessObjects.Unstock';
            return UnstockForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.UnstockForm = UnstockForm;
        [['Date', function () { return Serenity.DateEditor; }], ['PurchasesId', function () { return Serenity.IntegerEditor; }], ['RtnOutwardsDtlsId', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.DecimalEditor; }], ['QuantityInLeastUnit', function () { return Serenity.DecimalEditor; }], ['UomAndPriceId', function () { return Serenity.LookupEditor; }], ['IsUnstocked', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }], ['SumQuantity', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(UnstockForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var UnstockRow;
        (function (UnstockRow) {
            UnstockRow.idProperty = 'UnStockId';
            UnstockRow.localTextPrefix = 'BusinessObjects.Unstock';
            UnstockRow.lookupKey = 'BusinessObjects.Unstock';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Unstock');
            }
            UnstockRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UnstockRow.Fields || (UnstockRow.Fields = {}));
            [
                'UnStockId',
                'ProductId',
                'Date',
                'PurchasesId',
                'RtnOutwardsDtlsId',
                'Quantity',
                'QuantityInLeastUnit',
                'UomAndPriceId',
                'IsUnstocked',
                'LocationId',
                'SumQuantity',
                'ProductDate',
                'ProductProductCode',
                'ProductProductName',
                'ProductBrandName',
                'ProductProductCategoryId',
                'ProductSupplierId',
                'ProductLeastUnitName',
                'ProductAccountId',
                'UomAndPriceProductId',
                'UomAndPriceUnitName',
                'UomAndPriceUnitMakeUp',
                'UomAndPriceStandardUomid',
                'UomAndPriceDiscontinued',
                'UomAndPricePrice'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UnstockRow = BusinessObjects.UnstockRow || (BusinessObjects.UnstockRow = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var UnstockService;
        (function (UnstockService) {
            UnstockService.baseUrl = 'BusinessObjects/Unstock';
            var Methods;
            (function (Methods) {
            })(Methods = UnstockService.Methods || (UnstockService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UnstockService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnstockService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UnstockService.baseUrl + '/' + x;
            });
        })(UnstockService = BusinessObjects.UnstockService || (BusinessObjects.UnstockService = {}));
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            [
                'UserPreferenceId',
                'UserId',
                'PreferenceType',
                'Name',
                'Value'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                _super.apply(this, arguments);
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                _super.apply(this, arguments);
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                _super.apply(this, arguments);
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.StringEditor; }], ['RememberMe', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                _super.apply(this, arguments);
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                _super.apply(this, arguments);
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = InventoryManagement.Membership || (InventoryManagement.Membership = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = this;
            _super.call(this);
            this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    InventoryManagement.BasicProgressDialog = BasicProgressDialog;
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new InventoryManagement.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = InventoryManagement.DialogUtils || (InventoryManagement.DialogUtils = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                _super.call(this, container);
                this.nextId = 1;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity.__id;
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = row.__id;
                if (id == null) {
                    row.__id = this.nextId++;
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        delete y['__id'];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        y.__id = _this.nextId++;
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                _super.apply(this, arguments);
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = InventoryManagement.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = InventoryManagement.LanguageList || (InventoryManagement.LanguageList = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                            params: {
                                key: options.reportKey,
                                ext: Q.coalesce(options.extension, 'pdf'),
                                opt: (options.getParams == null ? '' : $.toJSON(options.getParams()))
                            },
                            target: Q.coalesce(options.target, '_blank')
                        });
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = InventoryManagement.Common || (InventoryManagement.Common = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var UnstockDialog = (function (_super) {
            __extends(UnstockDialog, _super);
            function UnstockDialog() {
                _super.call(this);
                this.form = new BusinessObjects.UnstockForm(this.idPrefix);
                if (this.isNew() || this.isEditMode())
                    this.form.RtnOutwardsDtlsId.cascadeField = BusinessObjects.ReturnOutwardsDetailsRow.Fields.PurchasesId;
                // this.form.ProductId.changeSelect2(e => {
                //     Q.notifySuccess('Product selection changed')
                // })
            } //Ends the constructor 
            UnstockDialog.prototype.getFormKey = function () { return BusinessObjects.UnstockForm.formKey; };
            UnstockDialog.prototype.getIdProperty = function () { return BusinessObjects.UnstockRow.idProperty; };
            UnstockDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.UnstockRow.localTextPrefix; };
            UnstockDialog.prototype.getService = function () { return BusinessObjects.UnstockService.baseUrl; };
            UnstockDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Q.reloadLookup("BusinessObjects.ReturnOutwardsDetailsLookup");
                this.form.LocationId.value = BusinessObjects.GlobalScripts.locationId;
                if (this.isNew())
                    this.form.RtnOutwardsDtlsId.cascadeValue = this.form.PurchasesId.value;
                this.form.LocationId.value = BusinessObjects.GlobalScripts.locationId;
            };
            UnstockDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
            };
            UnstockDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UnstockDialog);
            return UnstockDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.UnstockDialog = UnstockDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var UnstockEditor = (function (_super) {
            __extends(UnstockEditor, _super);
            function UnstockEditor(container) {
                _super.call(this, container);
            }
            UnstockEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Unstock'; };
            UnstockEditor.prototype.getDialogType = function () { return BusinessObjects.UnstockEditorDialog; };
            UnstockEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.UnstockRow.localTextPrefix; };
            UnstockEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], UnstockEditor);
            return UnstockEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.UnstockEditor = UnstockEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var UnstockEditorDialog = (function (_super) {
            __extends(UnstockEditorDialog, _super);
            function UnstockEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.UnstockForm(this.idPrefix);
            }
            UnstockEditorDialog.prototype.getFormKey = function () { return BusinessObjects.UnstockForm.formKey; };
            UnstockEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.UnstockRow.localTextPrefix; };
            UnstockEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UnstockEditorDialog);
            return UnstockEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.UnstockEditorDialog = UnstockEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var UnstockGrid = (function (_super) {
            __extends(UnstockGrid, _super);
            function UnstockGrid(container) {
                _super.call(this, container);
            }
            UnstockGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Unstock'; };
            UnstockGrid.prototype.getDialogType = function () { return BusinessObjects.UnstockDialog; };
            UnstockGrid.prototype.getIdProperty = function () { return BusinessObjects.UnstockRow.idProperty; };
            UnstockGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.UnstockRow.localTextPrefix; };
            UnstockGrid.prototype.getService = function () { return BusinessObjects.UnstockService.baseUrl; };
            UnstockGrid.prototype.addButtonClick = function () {
                this.editItem({ PurchasesId: this.purchasesID });
            };
            UnstockGrid.prototype.getInitialTitle = function () {
                return null;
            };
            UnstockGrid.prototype.getGridCanLoad = function () {
                return this._purchasesId != null;
            };
            Object.defineProperty(UnstockGrid.prototype, "purchasesID", {
                get: function () {
                    return this._purchasesId;
                },
                set: function (value) {
                    if (this._purchasesId != value) {
                        this._purchasesId = value;
                        this.setEquality(BusinessObjects.PurchasesDetailsRow.Fields.PurchasesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            UnstockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UnstockGrid);
            return UnstockGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.UnstockGrid = UnstockGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransferStockDialog = (function (_super) {
            __extends(TransferStockDialog, _super);
            function TransferStockDialog() {
                _super.call(this);
                this.form = new BusinessObjects.TransferStockForm(this.idPrefix);
            }
            TransferStockDialog.prototype.getFormKey = function () { return BusinessObjects.TransferStockForm.formKey; };
            TransferStockDialog.prototype.getIdProperty = function () { return BusinessObjects.StockRow.idProperty; };
            TransferStockDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.StockRow.localTextPrefix; };
            TransferStockDialog.prototype.getService = function () { return BusinessObjects.StockService.baseUrl; };
            TransferStockDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                //this.form.DummyLocationId.setEditValue(null, null)
                this.form.ActionKey.value = "TransferStock";
                this.form.DummyLocationId.items.splice(Q.indexOf(this.form.DummyLocationId.items, function (x) { return x.id == _this.form.LocationId.value; }), 1);
            };
            TransferStockDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TransferStockDialog);
            return TransferStockDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TransferStockDialog = TransferStockDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransferStockGrid = (function (_super) {
            __extends(TransferStockGrid, _super);
            function TransferStockGrid(container) {
                _super.call(this, container);
            }
            TransferStockGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.TransferStock'; };
            TransferStockGrid.prototype.getDialogType = function () { return BusinessObjects.TransferStockDialog; };
            TransferStockGrid.prototype.getIdProperty = function () { return BusinessObjects.StockRow.idProperty; };
            TransferStockGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.StockRow.localTextPrefix; };
            TransferStockGrid.prototype.getService = function () { return BusinessObjects.StockService.baseUrl; };
            TransferStockGrid.prototype.getInitialTitle = function () {
                return "Transfer stock";
            };
            TransferStockGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                return btns;
            };
            TransferStockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransferStockGrid);
            return TransferStockGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.TransferStockGrid = TransferStockGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierLocationDialog = (function (_super) {
            __extends(SupplierLocationDialog, _super);
            function SupplierLocationDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SupplierLocationForm(this.idPrefix);
            }
            SupplierLocationDialog.prototype.getFormKey = function () { return BusinessObjects.SupplierLocationForm.formKey; };
            SupplierLocationDialog.prototype.getIdProperty = function () { return BusinessObjects.SupplierLocationRow.idProperty; };
            SupplierLocationDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierLocationRow.localTextPrefix; };
            SupplierLocationDialog.prototype.getService = function () { return BusinessObjects.SupplierLocationService.baseUrl; };
            SupplierLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupplierLocationDialog);
            return SupplierLocationDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SupplierLocationDialog = SupplierLocationDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierLocationEditor = (function (_super) {
            __extends(SupplierLocationEditor, _super);
            function SupplierLocationEditor(container) {
                _super.call(this, container);
            }
            SupplierLocationEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.SupplierLocation'; };
            SupplierLocationEditor.prototype.getDialogType = function () { return BusinessObjects.SupplierLocationEditorDialog; };
            SupplierLocationEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierLocationRow.localTextPrefix; };
            SupplierLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierLocationEditor);
            return SupplierLocationEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.SupplierLocationEditor = SupplierLocationEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierLocationEditorDialog = (function (_super) {
            __extends(SupplierLocationEditorDialog, _super);
            function SupplierLocationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SupplierLocationForm(this.idPrefix);
            }
            SupplierLocationEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SupplierLocationForm.formKey; };
            SupplierLocationEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierLocationRow.localTextPrefix; };
            SupplierLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupplierLocationEditorDialog);
            return SupplierLocationEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.SupplierLocationEditorDialog = SupplierLocationEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierLocationGrid = (function (_super) {
            __extends(SupplierLocationGrid, _super);
            function SupplierLocationGrid(container) {
                _super.call(this, container);
            }
            SupplierLocationGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.SupplierLocation'; };
            SupplierLocationGrid.prototype.getDialogType = function () { return BusinessObjects.SupplierLocationDialog; };
            SupplierLocationGrid.prototype.getIdProperty = function () { return BusinessObjects.SupplierLocationRow.idProperty; };
            SupplierLocationGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierLocationRow.localTextPrefix; };
            SupplierLocationGrid.prototype.getService = function () { return BusinessObjects.SupplierLocationService.baseUrl; };
            SupplierLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierLocationGrid);
            return SupplierLocationGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SupplierLocationGrid = SupplierLocationGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierDialog = (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.SupplierForm(this.idPrefix);
                this.productsGrid = new BusinessObjects.ProductSupplier4Grid(this.byId("ProductGrid"));
                this.supplierPurchases = new BusinessObjects.SupplierPurchasesGrid(this.byId("PurchasesGrid"));
                this.supplierPayments = new BusinessObjects.SupplierPurchasesPaymentDetailsGrid(this.byId("PaymentGrid"));
                this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
            }
            SupplierDialog.prototype.getFormKey = function () { return BusinessObjects.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return BusinessObjects.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return BusinessObjects.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return BusinessObjects.SupplierService.baseUrl; };
            // protected afterLoadEntity(){
            //     super.afterLoadEntity();
            //     this.productsGrid.supplierID = this.entityId;
            //     Serenity.TabsExtensions.setDisabled(this.tabs, "Products", this.isNewOrDeleted())
            //     Serenity.TabsExtensions.setDisabled(this.tabs, "PurchasesHistory", this.isNewOrDeleted())
            // }
            SupplierDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.productsGrid.supplierID = entity.SupplierId;
                this.supplierPurchases.supplierID = entity.SupplierId;
                this.supplierPayments.supplierID = entity.SupplierId;
                Serenity.TabsExtensions.setDisabled(this.tabs, "Products", this.isNewOrDeleted());
                //Serenity.TabsExtensions.setDisabled(this.tabs, "PurchasesHistory", this.isNewOrDeleted());
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SupplierDialog = SupplierDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierEditor = (function (_super) {
            __extends(SupplierEditor, _super);
            function SupplierEditor(container) {
                _super.call(this, container);
            }
            SupplierEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Supplier'; };
            SupplierEditor.prototype.getDialogType = function () { return BusinessObjects.SupplierEditorDialog; };
            SupplierEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierRow.localTextPrefix; };
            SupplierEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierEditor);
            return SupplierEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.SupplierEditor = SupplierEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierEditorDialog = (function (_super) {
            __extends(SupplierEditorDialog, _super);
            function SupplierEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SupplierForm(this.idPrefix);
            }
            SupplierEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SupplierForm.formKey; };
            SupplierEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierRow.localTextPrefix; };
            SupplierEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.SupplierRow.nameProperty; };
            SupplierEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupplierEditorDialog);
            return SupplierEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.SupplierEditorDialog = SupplierEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierGrid = (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                _super.call(this, container);
            }
            SupplierGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Supplier'; };
            SupplierGrid.prototype.getDialogType = function () { return BusinessObjects.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return BusinessObjects.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return BusinessObjects.SupplierService.baseUrl; };
            SupplierGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return btns;
            };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SupplierGrid = SupplierGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierListLoader = (function () {
            function SupplierListLoader() {
                this.GridListDataSource();
                SupplierListLoader.SupplierListLoaderRef = this;
            }
            SupplierListLoader.prototype.GridListDataSource = function () {
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
                                BusinessObjects.SupplierService.List({ Criteria: options.data.Criteria }, function (res) {
                                    options.success(res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.SupplierService.List({ EqualityFilter: options.data.EqualityFilter }, function (res) {
                                    options.success(res);
                                });
                            }
                            else {
                                BusinessObjects.SupplierService.List({ IncludeColumns: ["PhoneNumber"] }, function (res) {
                                    options.success(res);
                                });
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
                }); //Ends
            };
            SupplierListLoader.prototype.Load = function () {
                this.LoadGrid();
            };
            SupplierListLoader.prototype.LoadInCustomer = function (customerId) {
            };
            SupplierListLoader.prototype.LoadGrid = function () {
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
                });
                $("#pager").kendoPager({
                    dataSource: this.supplierListDtSrc,
                });
                $("#pager2").kendoPager({
                    dataSource: this.supplierListDtSrc,
                });
            };
            SupplierListLoader.prototype.HideAddButton = function () {
                $("#add-btn").hide();
            };
            return SupplierListLoader;
        }());
        BusinessObjects.SupplierListLoader = SupplierListLoader;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierLookupEditor = (function (_super) {
            __extends(SupplierLookupEditor, _super);
            function SupplierLookupEditor(hidden) {
                _super.call(this, hidden);
            }
            SupplierLookupEditor.prototype.getLookupKey = function () {
                return 'BusinessObjects.Supplier';
                //return typeof(SupplierRow);
            };
            SupplierLookupEditor.prototype.getItemText = function (item, lookup) {
                //alert(super.getItemText(item, lookup) + ' [' + item.SupplierId + ']')
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.SupplierId + ']';
                //return item.SupplierId;
            };
            SupplierLookupEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SupplierLookupEditor);
            return SupplierLookupEditor;
        }(Serenity.LookupEditorBase));
        BusinessObjects.SupplierLookupEditor = SupplierLookupEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.ProductForm(this.idPrefix);
                this.purchUoMAndPricingGrid = new BusinessObjects.PurchasesUoMAndPriceGrid(this.byId("PurchUoMAndPricingGrid"));
                this.slsUoMAndPricingGrid = new BusinessObjects.SalesUoMAndPriceGrid(this.byId("SlsUoMAndPricingGrid"));
                this.purchasesDetailsGrid = new BusinessObjects.ProductPurchasesDetailsGrid(this.byId("PurchasesDetailsGrid"));
                this.productSupplierGrid = new BusinessObjects.ProductSupplierGrid(this.byId("SuppliersGrid"));
                this.movementHistory = new BusinessObjects.MovementHistoryGrid(this.byId("MvmntHist"));
                this.billOfMaterial = new BusinessObjects.BillOfMaterialGrid(this.byId("BillOfMat"));
                this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
                var selfChange = 0;
            }
            ProductDialog.prototype.getFormKey = function () { return BusinessObjects.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return BusinessObjects.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return BusinessObjects.ProductService.baseUrl; };
            ProductDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.SupplierId, true);
            };
            ProductDialog.prototype.loadEntity = function (prod) {
                _super.prototype.loadEntity.call(this, prod);
                //Serenity.TabsExtensions.setDisabled(this.tabs, "PurchasesDetails", this.isNewOrDeleted());
                //Q.reloadLookup(BusinessObjects.PurchasesUoMAndPriceRow.lookupKey)
                var productId = this.getProductId();
                Serenity.TabsExtensions.setDisabled(this.tabs, 'PurchasesDetails', !productId);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Suppliers', !productId);
                if (!productId) {
                    // no product is selected, just load an empty entity
                    return;
                }
                else {
                    this.productSupplierGrid.productID = productId;
                    this.purchUoMAndPricingGrid.productID = productId;
                    this.slsUoMAndPricingGrid.productID = productId;
                    this.movementHistory.productID = productId;
                    this.billOfMaterial.productID = productId;
                    BusinessObjects.GlobalScripts.ProductId = productId;
                    Q.reloadLookup("BusinessObjects.PurchasesUoMAndPrice");
                }
            };
            ProductDialog.prototype.getProductId = function () {
                var productId = this.form.ProductId.value;
                //if (Q.isEmptyOrNull(productId))
                //    return null;
                if (productId == null)
                    return null;
                // unfortunately, ProductId (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                //return Q.first(BusinessObjects.ProductRow.getLookup().items,
                //  x => x.ProductId == productId).ID;
                return productId;
            };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ProductDialog = ProductDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../Product/ProductDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierProductDialog = (function (_super) {
            __extends(SupplierProductDialog, _super);
            function SupplierProductDialog() {
                _super.call(this);
                this.form = new BusinessObjects.ProductForm(this.idPrefix);
            }
            SupplierProductDialog.prototype.getFormKey = function () { return BusinessObjects.ProductForm2.formKey; };
            SupplierProductDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductRow.idProperty; };
            SupplierProductDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            SupplierProductDialog.prototype.getNameProperty = function () { return BusinessObjects.ProductRow.nameProperty; };
            SupplierProductDialog.prototype.getService = function () { return BusinessObjects.ProductService.baseUrl; };
            SupplierProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupplierProductDialog);
            return SupplierProductDialog;
        }(BusinessObjects.ProductDialog));
        BusinessObjects.SupplierProductDialog = SupplierProductDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                _super.call(this, container);
            }
            ProductGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Product'; };
            ProductGrid.prototype.getDialogType = function () { return BusinessObjects.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return BusinessObjects.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return BusinessObjects.ProductService.baseUrl; };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductGrid = ProductGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../Product/ProductGrid.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierProductGrid = (function (_super) {
            __extends(SupplierProductGrid, _super);
            function SupplierProductGrid(container) {
                _super.call(this, container);
            }
            SupplierProductGrid.prototype.getDialogType = function () { return BusinessObjects.SupplierProductDialog; };
            SupplierProductGrid.prototype.addButtonClick = function () {
                this.editItem({ SupplierId: this.supplierID });
            };
            SupplierProductGrid.prototype.getInitialTitle = function () {
                return null;
            };
            SupplierProductGrid.prototype.getGridCanLoad = function () {
                //return this._supplierID != null;
                return _super.prototype.getGridCanLoad.call(this) && !!this.supplierID;
            };
            Object.defineProperty(SupplierProductGrid.prototype, "supplierID", {
                get: function () {
                    return this._supplierID;
                },
                set: function (value) {
                    if (this._supplierID != value) {
                        this._supplierID = value;
                        this.setEquality("SupplierId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SupplierProductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierProductGrid);
            return SupplierProductGrid;
        }(BusinessObjects.ProductGrid));
        BusinessObjects.SupplierProductGrid = SupplierProductGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierPurchasesGrid = (function (_super) {
            __extends(SupplierPurchasesGrid, _super);
            function SupplierPurchasesGrid(container) {
                _super.call(this, container);
            }
            SupplierPurchasesGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Purchases'; };
            SupplierPurchasesGrid.prototype.getDialogType = function () { return BusinessObjects.PurchasesDialog; };
            SupplierPurchasesGrid.prototype.getIdProperty = function () { return BusinessObjects.PurchasesRow.idProperty; };
            SupplierPurchasesGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesRow.localTextPrefix; };
            SupplierPurchasesGrid.prototype.getService = function () { return BusinessObjects.PurchasesService.baseUrl; };
            SupplierPurchasesGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                return btns;
            };
            SupplierPurchasesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            SupplierPurchasesGrid.prototype.getGridCanLoad = function () {
                return this._supplierID != null;
            };
            Object.defineProperty(SupplierPurchasesGrid.prototype, "supplierID", {
                get: function () {
                    return this._supplierID;
                },
                set: function (value) {
                    if (this._supplierID != value) {
                        this._supplierID = value;
                        this.setEquality("SupplierId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SupplierPurchasesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierPurchasesGrid);
            return SupplierPurchasesGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SupplierPurchasesGrid = SupplierPurchasesGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SupplierPurchasesPaymentDetailsGrid = (function (_super) {
            __extends(SupplierPurchasesPaymentDetailsGrid, _super);
            function SupplierPurchasesPaymentDetailsGrid(container) {
                _super.call(this, container);
            }
            SupplierPurchasesPaymentDetailsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.PurchasesPaymentsDetails'; };
            SupplierPurchasesPaymentDetailsGrid.prototype.getDialogType = function () { return BusinessObjects.PurchasesPaymentDetailsDialog; };
            SupplierPurchasesPaymentDetailsGrid.prototype.getIdProperty = function () { return BusinessObjects.PurchasesPaymentDetailsRow.idProperty; };
            SupplierPurchasesPaymentDetailsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesPaymentDetailsRow.localTextPrefix; };
            SupplierPurchasesPaymentDetailsGrid.prototype.getService = function () { return BusinessObjects.PurchasesPaymentDetailsService.baseUrl; };
            SupplierPurchasesPaymentDetailsGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                return btns;
            };
            SupplierPurchasesPaymentDetailsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            SupplierPurchasesPaymentDetailsGrid.prototype.getGridCanLoad = function () {
                return this._supplierId != null;
            };
            Object.defineProperty(SupplierPurchasesPaymentDetailsGrid.prototype, "supplierID", {
                get: function () {
                    return this._supplierId;
                },
                set: function (value) {
                    if (this._supplierId != value) {
                        this._supplierId = value;
                        this.setEquality(BusinessObjects.PurchasesPaymentDetailsRow.Fields.PurchasesSupplierId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SupplierPurchasesPaymentDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierPurchasesPaymentDetailsGrid);
            return SupplierPurchasesPaymentDetailsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SupplierPurchasesPaymentDetailsGrid = SupplierPurchasesPaymentDetailsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StockDialog = (function (_super) {
            __extends(StockDialog, _super);
            function StockDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.StockForm(this.idPrefix);
            }
            StockDialog.prototype.getFormKey = function () { return BusinessObjects.StockForm.formKey; };
            StockDialog.prototype.getIdProperty = function () { return BusinessObjects.StockRow.idProperty; };
            StockDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.StockRow.localTextPrefix; };
            StockDialog.prototype.getService = function () { return BusinessObjects.StockService.baseUrl; };
            StockDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], StockDialog);
            return StockDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.StockDialog = StockDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StockEditor = (function (_super) {
            __extends(StockEditor, _super);
            function StockEditor(container) {
                _super.call(this, container);
            }
            StockEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Stock'; };
            StockEditor.prototype.getDialogType = function () { return BusinessObjects.StockEditorDialog; };
            StockEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.StockRow.localTextPrefix; };
            StockEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], StockEditor);
            return StockEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.StockEditor = StockEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StockEditorDialog = (function (_super) {
            __extends(StockEditorDialog, _super);
            function StockEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.StockForm(this.idPrefix);
            }
            StockEditorDialog.prototype.getFormKey = function () { return BusinessObjects.StockForm.formKey; };
            StockEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.StockRow.localTextPrefix; };
            StockEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], StockEditorDialog);
            return StockEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.StockEditorDialog = StockEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StockGrid = (function (_super) {
            __extends(StockGrid, _super);
            function StockGrid(container) {
                _super.call(this, container);
            }
            StockGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Stock'; };
            StockGrid.prototype.getDialogType = function () { return BusinessObjects.StockDialog; };
            StockGrid.prototype.getIdProperty = function () { return BusinessObjects.StockRow.idProperty; };
            StockGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.StockRow.localTextPrefix; };
            StockGrid.prototype.getService = function () { return BusinessObjects.StockService.baseUrl; };
            /*
            protected   getButtons():Serenity.ToolButton[]{
                    return null;
                }
                */
            StockGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                return btns;
            };
            StockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StockGrid);
            return StockGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.StockGrid = StockGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StandardUoMDialog = (function (_super) {
            __extends(StandardUoMDialog, _super);
            function StandardUoMDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.StandardUoMForm(this.idPrefix);
            }
            StandardUoMDialog.prototype.getFormKey = function () { return BusinessObjects.StandardUoMForm.formKey; };
            StandardUoMDialog.prototype.getIdProperty = function () { return BusinessObjects.StandardUoMRow.idProperty; };
            StandardUoMDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.StandardUoMRow.localTextPrefix; };
            StandardUoMDialog.prototype.getNameProperty = function () { return BusinessObjects.StandardUoMRow.nameProperty; };
            StandardUoMDialog.prototype.getService = function () { return BusinessObjects.StandardUoMService.baseUrl; };
            StandardUoMDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], StandardUoMDialog);
            return StandardUoMDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.StandardUoMDialog = StandardUoMDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StandardUoMEditor = (function (_super) {
            __extends(StandardUoMEditor, _super);
            function StandardUoMEditor(container) {
                _super.call(this, container);
            }
            StandardUoMEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.StandardUoM'; };
            StandardUoMEditor.prototype.getDialogType = function () { return BusinessObjects.StandardUoMEditorDialog; };
            StandardUoMEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.StandardUoMRow.localTextPrefix; };
            StandardUoMEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], StandardUoMEditor);
            return StandardUoMEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.StandardUoMEditor = StandardUoMEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StandardUoMEditorDialog = (function (_super) {
            __extends(StandardUoMEditorDialog, _super);
            function StandardUoMEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.StandardUoMForm(this.idPrefix);
            }
            StandardUoMEditorDialog.prototype.getFormKey = function () { return BusinessObjects.StandardUoMForm.formKey; };
            StandardUoMEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.StandardUoMRow.localTextPrefix; };
            StandardUoMEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.StandardUoMRow.nameProperty; };
            StandardUoMEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], StandardUoMEditorDialog);
            return StandardUoMEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.StandardUoMEditorDialog = StandardUoMEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var StandardUoMGrid = (function (_super) {
            __extends(StandardUoMGrid, _super);
            function StandardUoMGrid(container) {
                _super.call(this, container);
            }
            StandardUoMGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.StandardUoM'; };
            StandardUoMGrid.prototype.getDialogType = function () { return BusinessObjects.StandardUoMDialog; };
            StandardUoMGrid.prototype.getIdProperty = function () { return BusinessObjects.StandardUoMRow.idProperty; };
            StandardUoMGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.StandardUoMRow.localTextPrefix; };
            StandardUoMGrid.prototype.getService = function () { return BusinessObjects.StandardUoMService.baseUrl; };
            StandardUoMGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StandardUoMGrid);
            return StandardUoMGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.StandardUoMGrid = StandardUoMGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesUoMAndPriceDialog = (function (_super) {
            __extends(SalesUoMAndPriceDialog, _super);
            function SalesUoMAndPriceDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SalesUoMAndPriceForm(this.idPrefix);
            }
            SalesUoMAndPriceDialog.prototype.getFormKey = function () { return BusinessObjects.SalesUoMAndPriceForm.formKey; };
            SalesUoMAndPriceDialog.prototype.getIdProperty = function () { return BusinessObjects.SalesUoMAndPriceRow.idProperty; };
            SalesUoMAndPriceDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesUoMAndPriceRow.localTextPrefix; };
            SalesUoMAndPriceDialog.prototype.getNameProperty = function () { return BusinessObjects.SalesUoMAndPriceRow.nameProperty; };
            SalesUoMAndPriceDialog.prototype.getService = function () { return BusinessObjects.SalesUoMAndPriceService.baseUrl; };
            SalesUoMAndPriceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesUoMAndPriceDialog);
            return SalesUoMAndPriceDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SalesUoMAndPriceDialog = SalesUoMAndPriceDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesUoMAndPriceEditor = (function (_super) {
            __extends(SalesUoMAndPriceEditor, _super);
            function SalesUoMAndPriceEditor(container) {
                _super.call(this, container);
            }
            SalesUoMAndPriceEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.SalesUoMAndPrice'; };
            SalesUoMAndPriceEditor.prototype.getDialogType = function () { return BusinessObjects.SalesUoMAndPriceEditorDialog; };
            SalesUoMAndPriceEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesUoMAndPriceRow.localTextPrefix; };
            SalesUoMAndPriceEditor.prototype.getAddButtonCaption = function () {
                return 'New sales UOM and price';
            };
            SalesUoMAndPriceEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesUoMAndPriceEditor);
            return SalesUoMAndPriceEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.SalesUoMAndPriceEditor = SalesUoMAndPriceEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesUoMAndPriceEditorDialog = (function (_super) {
            __extends(SalesUoMAndPriceEditorDialog, _super);
            function SalesUoMAndPriceEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SalesUoMAndPriceForm(this.idPrefix);
            }
            SalesUoMAndPriceEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SalesUoMAndPriceForm.formKey; };
            SalesUoMAndPriceEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesUoMAndPriceRow.localTextPrefix; };
            SalesUoMAndPriceEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.SalesUoMAndPriceRow.nameProperty; };
            SalesUoMAndPriceEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesUoMAndPriceEditorDialog);
            return SalesUoMAndPriceEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.SalesUoMAndPriceEditorDialog = SalesUoMAndPriceEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesUoMAndPriceGrid = (function (_super) {
            __extends(SalesUoMAndPriceGrid, _super);
            function SalesUoMAndPriceGrid(container) {
                _super.call(this, container);
            }
            SalesUoMAndPriceGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.SalesUoMAndPrice'; };
            SalesUoMAndPriceGrid.prototype.getDialogType = function () { return BusinessObjects.SalesUoMAndPriceDialog; };
            SalesUoMAndPriceGrid.prototype.getIdProperty = function () { return BusinessObjects.SalesUoMAndPriceRow.idProperty; };
            SalesUoMAndPriceGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesUoMAndPriceRow.localTextPrefix; };
            SalesUoMAndPriceGrid.prototype.getService = function () { return BusinessObjects.SalesUoMAndPriceService.baseUrl; };
            SalesUoMAndPriceGrid.prototype.getInitialTitle = function () {
                return "Sales UoM and Price";
            };
            SalesUoMAndPriceGrid.prototype.addButtonClick = function () {
                this.editItem({ ProductId: this.productID });
            };
            Object.defineProperty(SalesUoMAndPriceGrid.prototype, "productID", {
                get: function () {
                    return this._productID;
                },
                set: function (value) {
                    if (this._productID != value) {
                        this._productID = value;
                        this.setEquality(BusinessObjects.SalesUoMAndPriceRow.Fields.ProductId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SalesUoMAndPriceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesUoMAndPriceGrid);
            return SalesUoMAndPriceGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SalesUoMAndPriceGrid = SalesUoMAndPriceGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesPaymentDetailsDialog = (function (_super) {
            __extends(SalesPaymentDetailsDialog, _super);
            function SalesPaymentDetailsDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SalesPaymentDetailsForm(this.idPrefix);
            }
            SalesPaymentDetailsDialog.prototype.getFormKey = function () { return BusinessObjects.SalesPaymentDetailsForm.formKey; };
            SalesPaymentDetailsDialog.prototype.getIdProperty = function () { return BusinessObjects.SalesPaymentDetailsRow.idProperty; };
            SalesPaymentDetailsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesPaymentDetailsRow.localTextPrefix; };
            SalesPaymentDetailsDialog.prototype.getNameProperty = function () { return BusinessObjects.SalesPaymentDetailsRow.nameProperty; };
            SalesPaymentDetailsDialog.prototype.getService = function () { return BusinessObjects.SalesPaymentDetailsService.baseUrl; };
            SalesPaymentDetailsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SalesId.value = BusinessObjects.GlobalScripts.salesId;
            };
            SalesPaymentDetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesPaymentDetailsDialog);
            return SalesPaymentDetailsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SalesPaymentDetailsDialog = SalesPaymentDetailsDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesPaymentDetailsEditor = (function (_super) {
            __extends(SalesPaymentDetailsEditor, _super);
            function SalesPaymentDetailsEditor(container) {
                _super.call(this, container);
            }
            SalesPaymentDetailsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.SalesPaymentDetails'; };
            SalesPaymentDetailsEditor.prototype.getDialogType = function () { return BusinessObjects.SalesPaymentDetailsEditorDialog; };
            SalesPaymentDetailsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesPaymentDetailsRow.localTextPrefix; };
            SalesPaymentDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesPaymentDetailsEditor);
            return SalesPaymentDetailsEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.SalesPaymentDetailsEditor = SalesPaymentDetailsEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesPaymentDetailsEditorDialog = (function (_super) {
            __extends(SalesPaymentDetailsEditorDialog, _super);
            function SalesPaymentDetailsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SalesPaymentDetailsForm(this.idPrefix);
            }
            SalesPaymentDetailsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SalesPaymentDetailsForm.formKey; };
            SalesPaymentDetailsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesPaymentDetailsRow.localTextPrefix; };
            SalesPaymentDetailsEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.SalesPaymentDetailsRow.nameProperty; };
            SalesPaymentDetailsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesPaymentDetailsEditorDialog);
            return SalesPaymentDetailsEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.SalesPaymentDetailsEditorDialog = SalesPaymentDetailsEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesPaymentDetailsGrid = (function (_super) {
            __extends(SalesPaymentDetailsGrid, _super);
            function SalesPaymentDetailsGrid(container) {
                _super.call(this, container);
            }
            SalesPaymentDetailsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.SalesPaymentDetails'; };
            SalesPaymentDetailsGrid.prototype.getDialogType = function () { return BusinessObjects.SalesPaymentDetailsDialog; };
            SalesPaymentDetailsGrid.prototype.getIdProperty = function () { return BusinessObjects.SalesPaymentDetailsRow.idProperty; };
            SalesPaymentDetailsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesPaymentDetailsRow.localTextPrefix; };
            SalesPaymentDetailsGrid.prototype.getService = function () { return BusinessObjects.SalesPaymentDetailsService.baseUrl; };
            SalesPaymentDetailsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            SalesPaymentDetailsGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            SalesPaymentDetailsGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.salesID;
            };
            Object.defineProperty(SalesPaymentDetailsGrid.prototype, "salesID", {
                get: function () {
                    return this._salesId;
                },
                set: function (value) {
                    if (this._salesId != value) {
                        this._salesId = value;
                        this.setEquality(InventoryManagement.BusinessObjects.SalesDetailsRow.Fields.SalesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SalesPaymentDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesPaymentDetailsGrid);
            return SalesPaymentDetailsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SalesPaymentDetailsGrid = SalesPaymentDetailsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesInvoiceDialog = (function (_super) {
            __extends(SalesInvoiceDialog, _super);
            function SalesInvoiceDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.SalesInvoiceForm(this.idPrefix);
                this.form.ProductId.changeSelect2(function (e) {
                    _this.form.UnitPrice.value = null;
                    _this.form.Amount.value = null;
                });
                this.form.UomAndPriceId.changeSelect2(function (e) {
                    var uomAndPriceId = Q.toId(_this.form.UomAndPriceId.value);
                    if (uomAndPriceId != null) {
                        _this.form.UnitPrice.value = BusinessObjects.SalesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                        _this.calculateAmount();
                    }
                });
                this.form.Quantity.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.UnitPrice.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateAmount();
                });
            } //Ends the constructor 
            SalesInvoiceDialog.prototype.getFormKey = function () { return BusinessObjects.SalesInvoiceForm.formKey; };
            SalesInvoiceDialog.prototype.getIdProperty = function () { return BusinessObjects.SalesInvoiceRow.idProperty; };
            SalesInvoiceDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesInvoiceRow.localTextPrefix; };
            SalesInvoiceDialog.prototype.getService = function () { return BusinessObjects.SalesInvoiceService.baseUrl; };
            SalesInvoiceDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SalesId.value = BusinessObjects.GlobalScripts.salesId;
            };
            SalesInvoiceDialog.prototype.calculateAmount = function () {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                var unitPrice = this.form.UnitPrice.value;
                if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                    if (discount != undefined && discount != 0) {
                        var amount1 = (unitPrice * quantity);
                        var amount2 = (unitPrice * quantity) * (discount / 100);
                        this.form.Amount.value = amount1 - amount2;
                    }
                    else
                        this.form.Amount.value = unitPrice * quantity;
                }
            }; //Ends the calculateAmount
            SalesInvoiceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesInvoiceDialog);
            return SalesInvoiceDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SalesInvoiceDialog = SalesInvoiceDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesInvoiceEditor = (function (_super) {
            __extends(SalesInvoiceEditor, _super);
            function SalesInvoiceEditor(container) {
                _super.call(this, container);
            }
            SalesInvoiceEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.SalesInvoice'; };
            SalesInvoiceEditor.prototype.getDialogType = function () { return BusinessObjects.SalesInvoiceEditorDialog; };
            SalesInvoiceEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesInvoiceRow.localTextPrefix; };
            SalesInvoiceEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesInvoiceEditor);
            return SalesInvoiceEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.SalesInvoiceEditor = SalesInvoiceEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesInvoiceEditorDialog = (function (_super) {
            __extends(SalesInvoiceEditorDialog, _super);
            function SalesInvoiceEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SalesInvoiceForm(this.idPrefix);
            }
            SalesInvoiceEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SalesInvoiceForm.formKey; };
            SalesInvoiceEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesInvoiceRow.localTextPrefix; };
            SalesInvoiceEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesInvoiceEditorDialog);
            return SalesInvoiceEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.SalesInvoiceEditorDialog = SalesInvoiceEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesInvoiceGrid = (function (_super) {
            __extends(SalesInvoiceGrid, _super);
            function SalesInvoiceGrid(container) {
                _super.call(this, container);
            }
            SalesInvoiceGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.SalesInvoice'; };
            SalesInvoiceGrid.prototype.getDialogType = function () { return BusinessObjects.SalesInvoiceDialog; };
            SalesInvoiceGrid.prototype.getIdProperty = function () { return BusinessObjects.SalesInvoiceRow.idProperty; };
            SalesInvoiceGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesInvoiceRow.localTextPrefix; };
            SalesInvoiceGrid.prototype.getService = function () { return BusinessObjects.SalesInvoiceService.baseUrl; };
            SalesInvoiceGrid.prototype.getInitialTitle = function () {
                return null;
            };
            SalesInvoiceGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            SalesInvoiceGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.salesID;
            };
            Object.defineProperty(SalesInvoiceGrid.prototype, "salesID", {
                get: function () {
                    return this._salesId;
                },
                set: function (value) {
                    if (this._salesId != value) {
                        this._salesId = value;
                        this.setEquality(InventoryManagement.BusinessObjects.SalesDetailsRow.Fields.SalesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SalesInvoiceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesInvoiceGrid);
            return SalesInvoiceGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SalesInvoiceGrid = SalesInvoiceGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesDetailsDialog = (function (_super) {
            __extends(SalesDetailsDialog, _super);
            function SalesDetailsDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.SalesDetailsForm(this.idPrefix);
                this.form.ProductId.changeSelect2(function (e) {
                    _this.form.UnitPrice.value = null;
                    _this.form.Amount.value = null;
                });
                this.form.UomAndPriceId.changeSelect2(function (e) {
                    var uomAndPriceId = Q.toId(_this.form.UomAndPriceId.value);
                    if (uomAndPriceId != null) {
                        _this.form.UnitPrice.value = BusinessObjects.SalesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                        _this.calculateAmount();
                    }
                });
                this.form.Quantity.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.UnitPrice.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateAmount();
                });
            } //Ends the constructor 
            SalesDetailsDialog.prototype.getFormKey = function () { return BusinessObjects.SalesDetailsForm.formKey; };
            SalesDetailsDialog.prototype.getIdProperty = function () { return BusinessObjects.SalesDetailsRow.idProperty; };
            SalesDetailsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesDetailsRow.localTextPrefix; };
            SalesDetailsDialog.prototype.getService = function () { return BusinessObjects.SalesDetailsService.baseUrl; };
            SalesDetailsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SalesId.value = BusinessObjects.GlobalScripts.salesId;
            };
            SalesDetailsDialog.prototype.calculateAmount = function () {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                var unitPrice = this.form.UnitPrice.value;
                if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                    if (discount != undefined && discount != 0) {
                        var amount1 = (unitPrice * quantity);
                        var amount2 = (unitPrice * quantity) * (discount / 100);
                        this.form.Amount.value = amount1 - amount2;
                    }
                    else
                        this.form.Amount.value = unitPrice * quantity;
                }
            }; //Ends the calculateAmount
            SalesDetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesDetailsDialog);
            return SalesDetailsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SalesDetailsDialog = SalesDetailsDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesDetailsEditor = (function (_super) {
            __extends(SalesDetailsEditor, _super);
            function SalesDetailsEditor(container) {
                _super.call(this, container);
            }
            SalesDetailsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.SalesDetails'; };
            SalesDetailsEditor.prototype.getDialogType = function () { return BusinessObjects.SalesDetailsEditorDialog; };
            SalesDetailsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesDetailsRow.localTextPrefix; };
            SalesDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesDetailsEditor);
            return SalesDetailsEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.SalesDetailsEditor = SalesDetailsEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesDetailsEditorDialog = (function (_super) {
            __extends(SalesDetailsEditorDialog, _super);
            function SalesDetailsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SalesDetailsForm(this.idPrefix);
            }
            SalesDetailsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SalesDetailsForm.formKey; };
            SalesDetailsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesDetailsRow.localTextPrefix; };
            SalesDetailsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesDetailsEditorDialog);
            return SalesDetailsEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.SalesDetailsEditorDialog = SalesDetailsEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesDetailsGrid = (function (_super) {
            __extends(SalesDetailsGrid, _super);
            function SalesDetailsGrid(container) {
                _super.call(this, container);
            }
            SalesDetailsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.SalesDetails'; };
            SalesDetailsGrid.prototype.getDialogType = function () { return BusinessObjects.SalesDetailsDialog; };
            SalesDetailsGrid.prototype.getIdProperty = function () { return BusinessObjects.SalesDetailsRow.idProperty; };
            SalesDetailsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesDetailsRow.localTextPrefix; };
            SalesDetailsGrid.prototype.getService = function () { return BusinessObjects.SalesDetailsService.baseUrl; };
            SalesDetailsGrid.prototype.addButtonClick = function () {
                this.editItem({ SalesId: this.salesID });
                this.refresh();
            };
            SalesDetailsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            SalesDetailsGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            SalesDetailsGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.salesID;
            };
            Object.defineProperty(SalesDetailsGrid.prototype, "salesID", {
                get: function () {
                    return this._salesId;
                },
                set: function (value) {
                    if (this._salesId != value) {
                        this._salesId = value;
                        this.setEquality(InventoryManagement.BusinessObjects.SalesDetailsRow.Fields.SalesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SalesDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesDetailsGrid);
            return SalesDetailsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SalesDetailsGrid = SalesDetailsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesDialog = (function (_super) {
            __extends(SalesDialog, _super);
            function SalesDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.SalesForm(this.idPrefix);
                this.once = true;
                this.pickGrid = new BusinessObjects.PickSalesOrderGrid(this.byId("PickGrid"));
                this.invoiceGrid = new BusinessObjects.SalesInvoiceGrid(this.byId("InvoiceGrid"));
                this.paymentGrid = new BusinessObjects.SalesPaymentDetailsGrid(this.byId("PaymentGrid"));
                this.returnGrid = new BusinessObjects.ReturnInwardsDetailsGrid(this.byId("ReturnGrid"));
                this.restockGrid = new BusinessObjects.RestockGrid(this.byId("RestockGrid"));
                this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
                this.form.LocationId.changeSelect2(function (e) {
                    BusinessObjects.GlobalScripts.locationId = parseInt(_this.form.LocationId.value);
                });
                this.form.OrderId.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
            }
            SalesDialog.prototype.getFormKey = function () { return BusinessObjects.SalesForm.formKey; };
            SalesDialog.prototype.getIdProperty = function () { return BusinessObjects.SalesRow.idProperty; };
            SalesDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesRow.localTextPrefix; };
            SalesDialog.prototype.getNameProperty = function () { return BusinessObjects.SalesRow.nameProperty; };
            SalesDialog.prototype.getService = function () { return BusinessObjects.SalesService.baseUrl; };
            SalesDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                BusinessObjects.GlobalScripts.salesId = entity.SalesId;
                BusinessObjects.GlobalScripts.locationId = entity.LocationId;
                if (this.isNewOrDeleted()) {
                    //this.salesOrdersGrid.element.hide();
                    //alert('In here')
                    Serenity.TabsExtensions.setDisabled(this.tabs, "SalesOrders", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Pick", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Invoice", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Return", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Restock", true);
                    this.toolbar.findButton("complete-sales").hide();
                    this.toolbar.findButton("reopen-sales").hide();
                    this.toolbar.findButton("simple-sales").hide();
                    this.toolbar.findButton("advance-sales").hide();
                }
                else {
                    if (this.salesOrdersGrid == undefined)
                        this.initChildren();
                    this.salesOrdersGrid.salesID = entity.SalesId;
                    this.pickGrid.salesID = entity.SalesId;
                    this.invoiceGrid.salesID = entity.SalesId;
                    this.paymentGrid.salesID = entity.SalesId;
                    this.returnGrid.salesID = entity.SalesId;
                    this.restockGrid.salesID = entity.SalesId;
                    this.setToSimpleSales();
                    if (this.once) {
                        //   this.toolbar.findButton("simple-sales").show();
                        //   this.toolbar.findButton("complete-sales").show();
                        this.once = false;
                    }
                }
                //Serenity.TabsExtensions.setDisabled(this.tabs, 'SalesOrders', this.isNewOrDeleted());
                // if (this.isNewOrDeleted())
                //     this.salesOrdersGrid.element.parent("div.cont").hide()
                // else
                // {
                //     this.salesOrdersGrid.element.parent("div.cont").show();
                //     this.salesOrdersGrid.refresh();
                // }
                // if (!this.isNewOrDeleted()) {
                //     this.salesOrdersGrid = new SalesDetailsGrid(this.byId("SalesOrdersGrid"));
                //     this.salesOrdersGrid.salesID = entity.SalesId
                // }
            };
            SalesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("simple-sales").hide();
                if (!this.isNewOrDeleted()) {
                    if (this.form.IsAdvanced.value == true) {
                        this.setToAdvancedSales();
                    }
                    else
                        this.setToSimpleSales();
                    if (this.form.Status.value == 'Fully Picked') {
                        this.toggleCompleteReOpenButtons(true);
                    }
                    else
                        this.toggleCompleteReOpenButtons(false);
                }
            };
            SalesDialog.prototype.toggleCompleteReOpenButtons = function (isCompleted) {
                if (isCompleted) {
                    this.toolbar.findButton("reopen-sales").show();
                    this.toolbar.findButton("complete-sales").hide();
                }
                else {
                    this.toolbar.findButton("reopen-sales").hide();
                    this.toolbar.findButton("complete-sales").show();
                }
            };
            SalesDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var btns = buttons;
                //var btns = buttons.filter(x => x.cssClass != 'save-and-close-button');
                btns.push({
                    cssClass: 'advance-sales',
                    title: 'Convert to Advance Sales',
                    onClick: function () {
                        var requestObj = _this.GetRequestObject(_this.form.LocationId.value, _this.form.SalesId.value);
                        var url = "BusinessObjects/Sales/ConvertToAdvancedSales";
                        Q.serviceRequest(url, requestObj, function (response) {
                            _this.setToAdvancedSales();
                            Q.notifySuccess("Conversion to Advanced sales successfull.");
                        });
                    },
                });
                btns.push({
                    cssClass: 'simple-sales',
                    title: 'Convert to Simple Sales',
                    onClick: function () {
                        var requestObj = _this.GetRequestObject(_this.form.LocationId.value, _this.form.SalesId.value);
                        var url = "BusinessObjects/Sales/ConvertToSimpleSales";
                        Q.serviceRequest(url, requestObj, function (response) {
                            _this.setToSimpleSales();
                            Q.notifySuccess("Conversion to Simple sales successfull.");
                        });
                    },
                });
                btns.push({
                    cssClass: 'complete-sales',
                    title: 'Complete Sales',
                    onClick: function () {
                        //Q.alert('About to show')
                        var requestObj = _this.GetRequestObject(_this.form.LocationId.value, _this.form.SalesId.value);
                        var url = "BusinessObjects/Sales/CompleteSales";
                        Q.serviceRequest(url, requestObj, function (response) {
                            _this.toggleCompleteReOpenButtons(true);
                            //Q.notifySuccess(response.LocationId + "\n\n" + response.SalesId)
                            Q.notifySuccess("Complete sales successfull");
                        });
                    },
                });
                btns.push({
                    cssClass: 'reopen-sales',
                    title: 'Re-open Order',
                    onClick: function () {
                        var requestObj = _this.GetRequestObject(_this.form.LocationId.value, _this.form.SalesId.value);
                        var url = "BusinessObjects/Sales/ReopenOrder";
                        Q.serviceRequest(url, requestObj, function (response) {
                            _this.toggleCompleteReOpenButtons(false);
                            //Q.notifySuccess("Order reopened: " + response.LocationId + "\n\n" + response.SalesId)
                            Q.notifySuccess("Order reopen successfull");
                        });
                    },
                });
                return btns;
                //return buttons;
            };
            SalesDialog.prototype.initChildren = function () {
                if (!this.isNewOrDeleted()) {
                    this.salesOrdersGrid = new BusinessObjects.SalesDetailsGrid(this.byId("SalesOrdersGrid"));
                }
            };
            SalesDialog.prototype.GetRequestObject = function (locationId, salesId) {
                var requestObj = {
                    LocationId: locationId,
                    SalesId: salesId
                };
                return requestObj;
            };
            SalesDialog.prototype.setToSimpleSales = function () {
                this.toolbar.findButton("simple-sales").hide();
                this.toolbar.findButton("advance-sales").show();
                // this.toolbar.findButton("complete-sales").show();
                // this.toolbar.findButton("reopen-sales").hide();
                Serenity.TabsExtensions.setDisabled(this.tabs, "SalesOrders", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Pick", true);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Return", true);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Restock", true);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Invoice", true);
                //this.salesOrdersGrid.element.show();
            };
            SalesDialog.prototype.setToAdvancedSales = function () {
                this.toolbar.findButton("advance-sales").hide();
                this.toolbar.findButton("simple-sales").show();
                Serenity.TabsExtensions.setDisabled(this.tabs, "SalesOrders", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Pick", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Return", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Restock", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Invoice", false);
            };
            /****************************************************************** */
            SalesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            SalesDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.OrderId.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'SO').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    BusinessObjects.SalesService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.OrderId.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.OrderId.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            SalesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesDialog);
            return SalesDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SalesDialog = SalesDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesEditor = (function (_super) {
            __extends(SalesEditor, _super);
            function SalesEditor(container) {
                _super.call(this, container);
            }
            SalesEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Sales'; };
            SalesEditor.prototype.getDialogType = function () { return BusinessObjects.SalesEditorDialog; };
            SalesEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesRow.localTextPrefix; };
            SalesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesEditor);
            return SalesEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.SalesEditor = SalesEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesEditorDialog = (function (_super) {
            __extends(SalesEditorDialog, _super);
            function SalesEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.SalesForm(this.idPrefix);
            }
            SalesEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SalesForm.formKey; };
            SalesEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesRow.localTextPrefix; };
            SalesEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.SalesRow.nameProperty; };
            SalesEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SalesEditorDialog);
            return SalesEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.SalesEditorDialog = SalesEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SalesGrid = (function (_super) {
            __extends(SalesGrid, _super);
            function SalesGrid(container) {
                _super.call(this, container);
            }
            SalesGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Sales'; };
            SalesGrid.prototype.getDialogType = function () { return BusinessObjects.SalesDialog; };
            SalesGrid.prototype.getIdProperty = function () { return BusinessObjects.SalesRow.idProperty; };
            SalesGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SalesRow.localTextPrefix; };
            SalesGrid.prototype.getService = function () { return BusinessObjects.SalesService.baseUrl; };
            SalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesGrid);
            return SalesGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SalesGrid = SalesGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsPaymentDialog = (function (_super) {
            __extends(ReturnOutwardsPaymentDialog, _super);
            function ReturnOutwardsPaymentDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnOutwardsPaymentForm(this.idPrefix);
            }
            ReturnOutwardsPaymentDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnOutwardsPaymentForm.formKey; };
            ReturnOutwardsPaymentDialog.prototype.getIdProperty = function () { return BusinessObjects.ReturnOutwardsPaymentRow.idProperty; };
            ReturnOutwardsPaymentDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsPaymentRow.localTextPrefix; };
            ReturnOutwardsPaymentDialog.prototype.getService = function () { return BusinessObjects.ReturnOutwardsPaymentService.baseUrl; };
            ReturnOutwardsPaymentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnOutwardsPaymentDialog);
            return ReturnOutwardsPaymentDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ReturnOutwardsPaymentDialog = ReturnOutwardsPaymentDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsPaymentEditor = (function (_super) {
            __extends(ReturnOutwardsPaymentEditor, _super);
            function ReturnOutwardsPaymentEditor(container) {
                _super.call(this, container);
            }
            ReturnOutwardsPaymentEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnOutwardsPayments'; };
            ReturnOutwardsPaymentEditor.prototype.getDialogType = function () { return BusinessObjects.ReturnOutwardsPaymentEditorDialog; };
            ReturnOutwardsPaymentEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsPaymentRow.localTextPrefix; };
            ReturnOutwardsPaymentEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnOutwardsPaymentEditor);
            return ReturnOutwardsPaymentEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ReturnOutwardsPaymentEditor = ReturnOutwardsPaymentEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsPaymentEditorDialog = (function (_super) {
            __extends(ReturnOutwardsPaymentEditorDialog, _super);
            function ReturnOutwardsPaymentEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnOutwardsPaymentForm(this.idPrefix);
            }
            ReturnOutwardsPaymentEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnOutwardsPaymentForm.formKey; };
            ReturnOutwardsPaymentEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsPaymentRow.localTextPrefix; };
            ReturnOutwardsPaymentEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnOutwardsPaymentEditorDialog);
            return ReturnOutwardsPaymentEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ReturnOutwardsPaymentEditorDialog = ReturnOutwardsPaymentEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsPaymentGrid = (function (_super) {
            __extends(ReturnOutwardsPaymentGrid, _super);
            function ReturnOutwardsPaymentGrid(container) {
                _super.call(this, container);
            }
            ReturnOutwardsPaymentGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnOutwardsPayments'; };
            ReturnOutwardsPaymentGrid.prototype.getDialogType = function () { return BusinessObjects.ReturnOutwardsPaymentDialog; };
            ReturnOutwardsPaymentGrid.prototype.getIdProperty = function () { return BusinessObjects.ReturnOutwardsPaymentRow.idProperty; };
            ReturnOutwardsPaymentGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsPaymentRow.localTextPrefix; };
            ReturnOutwardsPaymentGrid.prototype.getService = function () { return BusinessObjects.ReturnOutwardsPaymentService.baseUrl; };
            ReturnOutwardsPaymentGrid.prototype.addButtonClick = function () {
                this.editItem({ PurchasesId: this.purchasesID });
            };
            ReturnOutwardsPaymentGrid.prototype.getInitialTitle = function () {
                return null;
            };
            ReturnOutwardsPaymentGrid.prototype.getGridCanLoad = function () {
                return this._purchasesId != null;
            };
            Object.defineProperty(ReturnOutwardsPaymentGrid.prototype, "purchasesID", {
                get: function () {
                    return this._purchasesId;
                },
                set: function (value) {
                    if (this._purchasesId != value) {
                        this._purchasesId = value;
                        this.setEquality(BusinessObjects.PurchasesDetailsRow.Fields.PurchasesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ReturnOutwardsPaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnOutwardsPaymentGrid);
            return ReturnOutwardsPaymentGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ReturnOutwardsPaymentGrid = ReturnOutwardsPaymentGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsDetailsDialog = (function (_super) {
            __extends(ReturnOutwardsDetailsDialog, _super);
            function ReturnOutwardsDetailsDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.ReturnOutwardsDetailsForm(this.idPrefix);
                this.form.ProductId.changeSelect2(function (e) {
                    _this.form.UnitPrice.value = null;
                    _this.form.Amount.value = null;
                });
                this.form.UomAndPriceId.changeSelect2(function (e) {
                    var uomAndPriceId = Q.toId(_this.form.UomAndPriceId.value);
                    if (uomAndPriceId != null) {
                        _this.form.UnitPrice.value = BusinessObjects.PurchasesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                        _this.calculateAmount();
                    }
                });
                this.form.Quantity.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.UnitPrice.change(function (e) {
                    _this.calculateAmount();
                });
            } //Ends the constructor 
            ReturnOutwardsDetailsDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnOutwardsDetailsForm.formKey; };
            ReturnOutwardsDetailsDialog.prototype.getIdProperty = function () { return BusinessObjects.ReturnOutwardsDetailsRow.idProperty; };
            ReturnOutwardsDetailsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsDetailsRow.localTextPrefix; };
            ReturnOutwardsDetailsDialog.prototype.getService = function () { return BusinessObjects.ReturnOutwardsDetailsService.baseUrl; };
            ReturnOutwardsDetailsDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                this.purchasesDialogReference.UpdatePurchases();
            };
            Object.defineProperty(ReturnOutwardsDetailsDialog.prototype, "PurchasesDialogReference", {
                set: function (value) {
                    this.purchasesDialogReference = value;
                },
                enumerable: true,
                configurable: true
            });
            ReturnOutwardsDetailsDialog.prototype.calculateAmount = function () {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                var quantity = this.form.Quantity.value;
                var unitPrice = this.form.UnitPrice.value;
                if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                    this.form.Amount.value = unitPrice * quantity;
                }
            }; //Ends the calculateAmount
            ReturnOutwardsDetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnOutwardsDetailsDialog);
            return ReturnOutwardsDetailsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ReturnOutwardsDetailsDialog = ReturnOutwardsDetailsDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsDetailsEditor = (function (_super) {
            __extends(ReturnOutwardsDetailsEditor, _super);
            function ReturnOutwardsDetailsEditor(container) {
                _super.call(this, container);
            }
            ReturnOutwardsDetailsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnOutwardsDetails'; };
            ReturnOutwardsDetailsEditor.prototype.getDialogType = function () { return BusinessObjects.ReturnOutwardsDetailsEditorDialog; };
            ReturnOutwardsDetailsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsDetailsRow.localTextPrefix; };
            ReturnOutwardsDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnOutwardsDetailsEditor);
            return ReturnOutwardsDetailsEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ReturnOutwardsDetailsEditor = ReturnOutwardsDetailsEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsDetailsEditorDialog = (function (_super) {
            __extends(ReturnOutwardsDetailsEditorDialog, _super);
            function ReturnOutwardsDetailsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnOutwardsDetailsForm(this.idPrefix);
            }
            ReturnOutwardsDetailsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnOutwardsDetailsForm.formKey; };
            ReturnOutwardsDetailsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsDetailsRow.localTextPrefix; };
            ReturnOutwardsDetailsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnOutwardsDetailsEditorDialog);
            return ReturnOutwardsDetailsEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ReturnOutwardsDetailsEditorDialog = ReturnOutwardsDetailsEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsDetailsGrid = (function (_super) {
            __extends(ReturnOutwardsDetailsGrid, _super);
            function ReturnOutwardsDetailsGrid(container) {
                _super.call(this, container);
            }
            ReturnOutwardsDetailsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnOutwardsDetails'; };
            ReturnOutwardsDetailsGrid.prototype.getDialogType = function () { return BusinessObjects.ReturnOutwardsDetailsDialog; };
            ReturnOutwardsDetailsGrid.prototype.getIdProperty = function () { return BusinessObjects.ReturnOutwardsDetailsRow.idProperty; };
            ReturnOutwardsDetailsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsDetailsRow.localTextPrefix; };
            ReturnOutwardsDetailsGrid.prototype.getService = function () { return BusinessObjects.ReturnOutwardsDetailsService.baseUrl; };
            //protected addButtonClick() {
            //     this.editItem({ PurchasesId: this.purchasesID, LocationId: GlobalScripts.locationId });
            // }
            ReturnOutwardsDetailsGrid.prototype.addButtonClick = function () {
                var dlg = new BusinessObjects.ReturnOutwardsDetailsDialog();
                dlg.loadEntityAndOpenDialog({ PurchasesId: this.purchasesID, LocationId: BusinessObjects.GlobalScripts.locationId });
                dlg.PurchasesDialogReference = this._purchasesDialogRef;
                this.initDialog(dlg);
                return false;
            };
            ReturnOutwardsDetailsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            ReturnOutwardsDetailsGrid.prototype.getGridCanLoad = function () {
                return this._purchasesId != null;
            };
            Object.defineProperty(ReturnOutwardsDetailsGrid.prototype, "purchasesID", {
                get: function () {
                    return this._purchasesId;
                },
                set: function (value) {
                    if (this._purchasesId != value) {
                        this._purchasesId = value;
                        this.setEquality(BusinessObjects.PurchasesDetailsRow.Fields.PurchasesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ReturnOutwardsDetailsGrid.prototype, "PurchasesDialogRef", {
                set: function (value) {
                    this._purchasesDialogRef = value;
                },
                enumerable: true,
                configurable: true
            });
            ReturnOutwardsDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnOutwardsDetailsGrid);
            return ReturnOutwardsDetailsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ReturnOutwardsDetailsGrid = ReturnOutwardsDetailsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsDialog = (function (_super) {
            __extends(ReturnOutwardsDialog, _super);
            function ReturnOutwardsDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnOutwardsForm(this.idPrefix);
            }
            ReturnOutwardsDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnOutwardsForm.formKey; };
            ReturnOutwardsDialog.prototype.getIdProperty = function () { return BusinessObjects.ReturnOutwardsRow.idProperty; };
            ReturnOutwardsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsRow.localTextPrefix; };
            ReturnOutwardsDialog.prototype.getService = function () { return BusinessObjects.ReturnOutwardsService.baseUrl; };
            ReturnOutwardsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnOutwardsDialog);
            return ReturnOutwardsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ReturnOutwardsDialog = ReturnOutwardsDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsEditor = (function (_super) {
            __extends(ReturnOutwardsEditor, _super);
            function ReturnOutwardsEditor(container) {
                _super.call(this, container);
            }
            ReturnOutwardsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnOutwards'; };
            ReturnOutwardsEditor.prototype.getDialogType = function () { return BusinessObjects.ReturnOutwardsEditorDialog; };
            ReturnOutwardsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsRow.localTextPrefix; };
            ReturnOutwardsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnOutwardsEditor);
            return ReturnOutwardsEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ReturnOutwardsEditor = ReturnOutwardsEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsEditorDialog = (function (_super) {
            __extends(ReturnOutwardsEditorDialog, _super);
            function ReturnOutwardsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnOutwardsForm(this.idPrefix);
            }
            ReturnOutwardsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnOutwardsForm.formKey; };
            ReturnOutwardsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsRow.localTextPrefix; };
            ReturnOutwardsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnOutwardsEditorDialog);
            return ReturnOutwardsEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ReturnOutwardsEditorDialog = ReturnOutwardsEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnOutwardsGrid = (function (_super) {
            __extends(ReturnOutwardsGrid, _super);
            function ReturnOutwardsGrid(container) {
                _super.call(this, container);
            }
            ReturnOutwardsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnOutwards'; };
            ReturnOutwardsGrid.prototype.getDialogType = function () { return BusinessObjects.ReturnOutwardsDialog; };
            ReturnOutwardsGrid.prototype.getIdProperty = function () { return BusinessObjects.ReturnOutwardsRow.idProperty; };
            ReturnOutwardsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnOutwardsRow.localTextPrefix; };
            ReturnOutwardsGrid.prototype.getService = function () { return BusinessObjects.ReturnOutwardsService.baseUrl; };
            ReturnOutwardsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnOutwardsGrid);
            return ReturnOutwardsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ReturnOutwardsGrid = ReturnOutwardsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsPaymentDialog = (function (_super) {
            __extends(ReturnInwardsPaymentDialog, _super);
            function ReturnInwardsPaymentDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnInwardsPaymentForm(this.idPrefix);
            }
            ReturnInwardsPaymentDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnInwardsPaymentForm.formKey; };
            ReturnInwardsPaymentDialog.prototype.getIdProperty = function () { return BusinessObjects.ReturnInwardsPaymentRow.idProperty; };
            ReturnInwardsPaymentDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsPaymentRow.localTextPrefix; };
            ReturnInwardsPaymentDialog.prototype.getService = function () { return BusinessObjects.ReturnInwardsPaymentService.baseUrl; };
            ReturnInwardsPaymentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnInwardsPaymentDialog);
            return ReturnInwardsPaymentDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ReturnInwardsPaymentDialog = ReturnInwardsPaymentDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsPaymentEditor = (function (_super) {
            __extends(ReturnInwardsPaymentEditor, _super);
            function ReturnInwardsPaymentEditor(container) {
                _super.call(this, container);
            }
            ReturnInwardsPaymentEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnInwardsPayment'; };
            ReturnInwardsPaymentEditor.prototype.getDialogType = function () { return BusinessObjects.ReturnInwardsPaymentEditorDialog; };
            ReturnInwardsPaymentEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsPaymentRow.localTextPrefix; };
            ReturnInwardsPaymentEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnInwardsPaymentEditor);
            return ReturnInwardsPaymentEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ReturnInwardsPaymentEditor = ReturnInwardsPaymentEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsPaymentEditorDialog = (function (_super) {
            __extends(ReturnInwardsPaymentEditorDialog, _super);
            function ReturnInwardsPaymentEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnInwardsPaymentForm(this.idPrefix);
            }
            ReturnInwardsPaymentEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnInwardsPaymentForm.formKey; };
            ReturnInwardsPaymentEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsPaymentRow.localTextPrefix; };
            ReturnInwardsPaymentEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnInwardsPaymentEditorDialog);
            return ReturnInwardsPaymentEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ReturnInwardsPaymentEditorDialog = ReturnInwardsPaymentEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsPaymentGrid = (function (_super) {
            __extends(ReturnInwardsPaymentGrid, _super);
            function ReturnInwardsPaymentGrid(container) {
                _super.call(this, container);
            }
            ReturnInwardsPaymentGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnInwardsPayment'; };
            ReturnInwardsPaymentGrid.prototype.getDialogType = function () { return BusinessObjects.ReturnInwardsPaymentDialog; };
            ReturnInwardsPaymentGrid.prototype.getIdProperty = function () { return BusinessObjects.ReturnInwardsPaymentRow.idProperty; };
            ReturnInwardsPaymentGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsPaymentRow.localTextPrefix; };
            ReturnInwardsPaymentGrid.prototype.getService = function () { return BusinessObjects.ReturnInwardsPaymentService.baseUrl; };
            ReturnInwardsPaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnInwardsPaymentGrid);
            return ReturnInwardsPaymentGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ReturnInwardsPaymentGrid = ReturnInwardsPaymentGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsDetailsDialog = (function (_super) {
            __extends(ReturnInwardsDetailsDialog, _super);
            function ReturnInwardsDetailsDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.ReturnInwardsDetailsForm(this.idPrefix);
                this.form.ProductId.changeSelect2(function (e) {
                    _this.form.UnitPrice.value = null;
                    _this.form.Amount.value = null;
                });
                this.form.UomAndPriceId.changeSelect2(function (e) {
                    var uomAndPriceId = Q.toId(_this.form.UomAndPriceId.value);
                    if (uomAndPriceId != null) {
                        _this.form.UnitPrice.value = BusinessObjects.SalesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                        _this.calculateAmount();
                    }
                });
                this.form.Quantity.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.UnitPrice.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateAmount();
                });
            } //Ends the constructor 
            ReturnInwardsDetailsDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnInwardsDetailsForm.formKey; };
            ReturnInwardsDetailsDialog.prototype.getIdProperty = function () { return BusinessObjects.ReturnInwardsDetailsRow.idProperty; };
            ReturnInwardsDetailsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsDetailsRow.localTextPrefix; };
            ReturnInwardsDetailsDialog.prototype.getService = function () { return BusinessObjects.ReturnInwardsDetailsService.baseUrl; };
            ReturnInwardsDetailsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SalesId.value = BusinessObjects.GlobalScripts.salesId;
            };
            ReturnInwardsDetailsDialog.prototype.calculateAmount = function () {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                var unitPrice = this.form.UnitPrice.value;
                if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                    if (discount != undefined && discount != 0) {
                        var amount1 = (unitPrice * quantity);
                        var amount2 = (unitPrice * quantity) * (discount / 100);
                        this.form.Amount.value = amount1 - amount2;
                    }
                    else
                        this.form.Amount.value = unitPrice * quantity;
                }
            }; //Ends the calculateAmount
            ReturnInwardsDetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnInwardsDetailsDialog);
            return ReturnInwardsDetailsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ReturnInwardsDetailsDialog = ReturnInwardsDetailsDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsDetailsEditor = (function (_super) {
            __extends(ReturnInwardsDetailsEditor, _super);
            function ReturnInwardsDetailsEditor(container) {
                _super.call(this, container);
            }
            ReturnInwardsDetailsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnInwardsDetails'; };
            ReturnInwardsDetailsEditor.prototype.getDialogType = function () { return BusinessObjects.ReturnInwardsDetailsEditorDialog; };
            ReturnInwardsDetailsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsDetailsRow.localTextPrefix; };
            ReturnInwardsDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnInwardsDetailsEditor);
            return ReturnInwardsDetailsEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ReturnInwardsDetailsEditor = ReturnInwardsDetailsEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsDetailsEditorDialog = (function (_super) {
            __extends(ReturnInwardsDetailsEditorDialog, _super);
            function ReturnInwardsDetailsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnInwardsDetailsForm(this.idPrefix);
            }
            ReturnInwardsDetailsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnInwardsDetailsForm.formKey; };
            ReturnInwardsDetailsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsDetailsRow.localTextPrefix; };
            ReturnInwardsDetailsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnInwardsDetailsEditorDialog);
            return ReturnInwardsDetailsEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ReturnInwardsDetailsEditorDialog = ReturnInwardsDetailsEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsDetailsGrid = (function (_super) {
            __extends(ReturnInwardsDetailsGrid, _super);
            function ReturnInwardsDetailsGrid(container) {
                _super.call(this, container);
            }
            ReturnInwardsDetailsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnInwardsDetails'; };
            ReturnInwardsDetailsGrid.prototype.getDialogType = function () { return BusinessObjects.ReturnInwardsDetailsDialog; };
            ReturnInwardsDetailsGrid.prototype.getIdProperty = function () { return BusinessObjects.ReturnInwardsDetailsRow.idProperty; };
            ReturnInwardsDetailsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsDetailsRow.localTextPrefix; };
            ReturnInwardsDetailsGrid.prototype.getService = function () { return BusinessObjects.ReturnInwardsDetailsService.baseUrl; };
            ReturnInwardsDetailsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            ReturnInwardsDetailsGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            ReturnInwardsDetailsGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.salesID;
            };
            Object.defineProperty(ReturnInwardsDetailsGrid.prototype, "salesID", {
                get: function () {
                    return this._salesId;
                },
                set: function (value) {
                    if (this._salesId != value) {
                        this._salesId = value;
                        this.setEquality(InventoryManagement.BusinessObjects.SalesDetailsRow.Fields.SalesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ReturnInwardsDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnInwardsDetailsGrid);
            return ReturnInwardsDetailsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ReturnInwardsDetailsGrid = ReturnInwardsDetailsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsDialog = (function (_super) {
            __extends(ReturnInwardsDialog, _super);
            function ReturnInwardsDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnInwardsForm(this.idPrefix);
            }
            ReturnInwardsDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnInwardsForm.formKey; };
            ReturnInwardsDialog.prototype.getIdProperty = function () { return BusinessObjects.ReturnInwardsRow.idProperty; };
            ReturnInwardsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsRow.localTextPrefix; };
            ReturnInwardsDialog.prototype.getService = function () { return BusinessObjects.ReturnInwardsService.baseUrl; };
            ReturnInwardsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnInwardsDialog);
            return ReturnInwardsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ReturnInwardsDialog = ReturnInwardsDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsEditor = (function (_super) {
            __extends(ReturnInwardsEditor, _super);
            function ReturnInwardsEditor(container) {
                _super.call(this, container);
            }
            ReturnInwardsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnInwards'; };
            ReturnInwardsEditor.prototype.getDialogType = function () { return BusinessObjects.ReturnInwardsEditorDialog; };
            ReturnInwardsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsRow.localTextPrefix; };
            ReturnInwardsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnInwardsEditor);
            return ReturnInwardsEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ReturnInwardsEditor = ReturnInwardsEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsEditorDialog = (function (_super) {
            __extends(ReturnInwardsEditorDialog, _super);
            function ReturnInwardsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReturnInwardsForm(this.idPrefix);
            }
            ReturnInwardsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ReturnInwardsForm.formKey; };
            ReturnInwardsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsRow.localTextPrefix; };
            ReturnInwardsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReturnInwardsEditorDialog);
            return ReturnInwardsEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ReturnInwardsEditorDialog = ReturnInwardsEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReturnInwardsGrid = (function (_super) {
            __extends(ReturnInwardsGrid, _super);
            function ReturnInwardsGrid(container) {
                _super.call(this, container);
            }
            ReturnInwardsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ReturnInwards'; };
            ReturnInwardsGrid.prototype.getDialogType = function () { return BusinessObjects.ReturnInwardsDialog; };
            ReturnInwardsGrid.prototype.getIdProperty = function () { return BusinessObjects.ReturnInwardsRow.idProperty; };
            ReturnInwardsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReturnInwardsRow.localTextPrefix; };
            ReturnInwardsGrid.prototype.getService = function () { return BusinessObjects.ReturnInwardsService.baseUrl; };
            ReturnInwardsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnInwardsGrid);
            return ReturnInwardsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ReturnInwardsGrid = ReturnInwardsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var RestockDialog = (function (_super) {
            __extends(RestockDialog, _super);
            function RestockDialog() {
                _super.call(this);
                this.form = new BusinessObjects.RestockForm(this.idPrefix);
                if (this.isNew() || this.isEditMode()) {
                    this.form.RtnInwardsDtlsId.cascadeField = BusinessObjects.RestockRow.Fields.SalesId;
                }
            }
            RestockDialog.prototype.getFormKey = function () { return BusinessObjects.RestockForm.formKey; };
            RestockDialog.prototype.getIdProperty = function () { return BusinessObjects.RestockRow.idProperty; };
            RestockDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.RestockRow.localTextPrefix; };
            RestockDialog.prototype.getService = function () { return BusinessObjects.RestockService.baseUrl; };
            RestockDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Q.reloadLookup("BusinessObjects.ReturnInwardsDetailsLookup");
                this.form.SalesId.value = BusinessObjects.GlobalScripts.salesId;
                this.form.LocationId.value = BusinessObjects.GlobalScripts.locationId;
                if (this.isNew())
                    this.form.RtnInwardsDtlsId.cascadeValue = BusinessObjects.GlobalScripts.salesId;
            };
            RestockDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RestockDialog);
            return RestockDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.RestockDialog = RestockDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var RestockEditor = (function (_super) {
            __extends(RestockEditor, _super);
            function RestockEditor(container) {
                _super.call(this, container);
            }
            RestockEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Restock'; };
            RestockEditor.prototype.getDialogType = function () { return BusinessObjects.RestockEditorDialog; };
            RestockEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.RestockRow.localTextPrefix; };
            RestockEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], RestockEditor);
            return RestockEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.RestockEditor = RestockEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var RestockEditorDialog = (function (_super) {
            __extends(RestockEditorDialog, _super);
            function RestockEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.RestockForm(this.idPrefix);
            }
            RestockEditorDialog.prototype.getFormKey = function () { return BusinessObjects.RestockForm.formKey; };
            RestockEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.RestockRow.localTextPrefix; };
            RestockEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RestockEditorDialog);
            return RestockEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.RestockEditorDialog = RestockEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var RestockGrid = (function (_super) {
            __extends(RestockGrid, _super);
            function RestockGrid(container) {
                _super.call(this, container);
            }
            RestockGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Restock'; };
            RestockGrid.prototype.getDialogType = function () { return BusinessObjects.RestockDialog; };
            RestockGrid.prototype.getIdProperty = function () { return BusinessObjects.RestockRow.idProperty; };
            RestockGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.RestockRow.localTextPrefix; };
            RestockGrid.prototype.getService = function () { return BusinessObjects.RestockService.baseUrl; };
            RestockGrid.prototype.getInitialTitle = function () {
                return null;
            };
            RestockGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            RestockGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.salesID;
            };
            Object.defineProperty(RestockGrid.prototype, "salesID", {
                get: function () {
                    return this._salesId;
                },
                set: function (value) {
                    if (this._salesId != value) {
                        this._salesId = value;
                        this.setEquality(InventoryManagement.BusinessObjects.SalesDetailsRow.Fields.SalesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            RestockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RestockGrid);
            return RestockGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.RestockGrid = RestockGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchaseInvoice = (function () {
            function PurchaseInvoice() {
                this.invoice = kendo.observable({
                    date: new Date(),
                }); //Ends this.ticketList
                kendo.bind($("#invoice-section"), this.invoice);
            }
            return PurchaseInvoice;
        }());
        BusinessObjects.PurchaseInvoice = PurchaseInvoice;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReorderPointDialog = (function (_super) {
            __extends(ReorderPointDialog, _super);
            function ReorderPointDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReorderPointForm(this.idPrefix);
            }
            ReorderPointDialog.prototype.getFormKey = function () { return BusinessObjects.ReorderPointForm.formKey; };
            ReorderPointDialog.prototype.getIdProperty = function () { return BusinessObjects.ReorderPointRow.idProperty; };
            ReorderPointDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReorderPointRow.localTextPrefix; };
            ReorderPointDialog.prototype.getService = function () { return BusinessObjects.ReorderPointService.baseUrl; };
            ReorderPointDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReorderPointDialog);
            return ReorderPointDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ReorderPointDialog = ReorderPointDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReorderPointEditor = (function (_super) {
            __extends(ReorderPointEditor, _super);
            function ReorderPointEditor(container) {
                _super.call(this, container);
            }
            ReorderPointEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ReorderPoint'; };
            ReorderPointEditor.prototype.getDialogType = function () { return BusinessObjects.ReorderPointEditorDialog; };
            ReorderPointEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReorderPointRow.localTextPrefix; };
            ReorderPointEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ReorderPointEditor);
            return ReorderPointEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ReorderPointEditor = ReorderPointEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReorderPointEditorDialog = (function (_super) {
            __extends(ReorderPointEditorDialog, _super);
            function ReorderPointEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReorderPointForm(this.idPrefix);
            }
            ReorderPointEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ReorderPointForm.formKey; };
            ReorderPointEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReorderPointRow.localTextPrefix; };
            ReorderPointEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReorderPointEditorDialog);
            return ReorderPointEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ReorderPointEditorDialog = ReorderPointEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReorderPointGrid = (function (_super) {
            __extends(ReorderPointGrid, _super);
            function ReorderPointGrid(container) {
                _super.call(this, container);
            }
            ReorderPointGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ReorderPoint'; };
            ReorderPointGrid.prototype.getDialogType = function () { return BusinessObjects.ReorderPointDialog; };
            ReorderPointGrid.prototype.getIdProperty = function () { return BusinessObjects.ReorderPointRow.idProperty; };
            ReorderPointGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReorderPointRow.localTextPrefix; };
            ReorderPointGrid.prototype.getService = function () { return BusinessObjects.ReorderPointService.baseUrl; };
            ReorderPointGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReorderPointGrid);
            return ReorderPointGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ReorderPointGrid = ReorderPointGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReceivePurchasesDialog = (function (_super) {
            __extends(ReceivePurchasesDialog, _super);
            function ReceivePurchasesDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.ReceivePurchasesForm(this.idPrefix);
                this.form.LocationId.value = BusinessObjects.GlobalScripts.locationId;
                this.form.ProductId.changeSelect2(function (e) {
                    _this.form.UnitPrice.value = null;
                    _this.form.Amount.value = null;
                });
                this.form.UomAndPriceId.changeSelect2(function (e) {
                    var uomAndPriceId = Q.toId(_this.form.UomAndPriceId.value);
                    if (uomAndPriceId != null) {
                        _this.form.UnitPrice.value = BusinessObjects.PurchasesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                        _this.calculateAmount();
                    }
                });
                this.form.Quantity.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.UnitPrice.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.Discount.change(function (e) {
                    _this.form.Discount.value = (_this.form.Discount.value / 100);
                    _this.calculateAmount();
                });
                this.form.IsFree.change(function (e) {
                    _this.calculateAmount();
                });
            } //Ends the constructor 
            ReceivePurchasesDialog.prototype.getFormKey = function () { return BusinessObjects.ReceivePurchasesForm.formKey; };
            ReceivePurchasesDialog.prototype.getIdProperty = function () { return BusinessObjects.ReceivePurchasesRow.idProperty; };
            ReceivePurchasesDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReceivePurchasesRow.localTextPrefix; };
            ReceivePurchasesDialog.prototype.getService = function () { return BusinessObjects.ReceivePurchasesService.baseUrl; };
            ReceivePurchasesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.LocationId.value = BusinessObjects.GlobalScripts.locationId;
            };
            ReceivePurchasesDialog.prototype.calculateAmount = function () {
                if (!this.form.IsFree.value) {
                    var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                    var quantity = this.form.Quantity.value;
                    var discount = this.form.Discount.value;
                    var unitPrice = this.form.UnitPrice.value;
                    if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                        if (discount != undefined && discount != 0) {
                            var amount1 = (unitPrice * quantity);
                            var amount2 = (unitPrice * quantity) * discount;
                            this.form.Amount.value = amount1 - amount2;
                        }
                        else
                            this.form.Amount.value = unitPrice * quantity;
                    }
                }
                else
                    this.form.Amount.value = 0;
            }; //Ends the calculateAmount
            ReceivePurchasesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReceivePurchasesDialog);
            return ReceivePurchasesDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ReceivePurchasesDialog = ReceivePurchasesDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReceivePurchasesEditor = (function (_super) {
            __extends(ReceivePurchasesEditor, _super);
            function ReceivePurchasesEditor(container) {
                _super.call(this, container);
            }
            ReceivePurchasesEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ReceivePurchases'; };
            ReceivePurchasesEditor.prototype.getDialogType = function () { return BusinessObjects.ReceivePurchasesEditorDialog; };
            ReceivePurchasesEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReceivePurchasesRow.localTextPrefix; };
            ReceivePurchasesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceivePurchasesEditor);
            return ReceivePurchasesEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ReceivePurchasesEditor = ReceivePurchasesEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReceivePurchasesEditorDialog = (function (_super) {
            __extends(ReceivePurchasesEditorDialog, _super);
            function ReceivePurchasesEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ReceivePurchasesForm(this.idPrefix);
            }
            ReceivePurchasesEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ReceivePurchasesForm.formKey; };
            ReceivePurchasesEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReceivePurchasesRow.localTextPrefix; };
            ReceivePurchasesEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReceivePurchasesEditorDialog);
            return ReceivePurchasesEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ReceivePurchasesEditorDialog = ReceivePurchasesEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReceivePurchasesGrid = (function (_super) {
            __extends(ReceivePurchasesGrid, _super);
            function ReceivePurchasesGrid(container) {
                _super.call(this, container);
            }
            ReceivePurchasesGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ReceivePurchases'; };
            ReceivePurchasesGrid.prototype.getDialogType = function () { return BusinessObjects.ReceivePurchasesDialog; };
            ReceivePurchasesGrid.prototype.getIdProperty = function () { return BusinessObjects.ReceivePurchasesRow.idProperty; };
            ReceivePurchasesGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ReceivePurchasesRow.localTextPrefix; };
            ReceivePurchasesGrid.prototype.getService = function () { return BusinessObjects.ReceivePurchasesService.baseUrl; };
            ReceivePurchasesGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.push({
                    cssClass: "add-button",
                    title: "Auto fill",
                    onClick: function () {
                        var url = "BusinessObjects/ReceivePurchases/AutoFill";
                        Q.serviceRequest(url, _this.GetRequestObject(), function (response) {
                            Q.notifySuccess(response.Status);
                            _this.refresh();
                        });
                    },
                });
                return btns;
            };
            //Customer func
            ReceivePurchasesGrid.prototype.refreshGrid = function () {
            };
            ReceivePurchasesGrid.prototype.addButtonClick = function () {
                this.editItem({ PurchasesId: this.purchasesID });
            };
            ReceivePurchasesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            ReceivePurchasesGrid.prototype.getGridCanLoad = function () {
                return this._purchasesId != null;
            };
            Object.defineProperty(ReceivePurchasesGrid.prototype, "purchasesID", {
                get: function () {
                    return this._purchasesId;
                },
                set: function (value) {
                    if (this._purchasesId != value) {
                        this._purchasesId = value;
                        this.setEquality(BusinessObjects.PurchasesDetailsRow.Fields.PurchasesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ReceivePurchasesGrid.prototype.GetRequestObject = function () {
                return { PurchaseId: this.purchasesID, LocationId: BusinessObjects.GlobalScripts.locationId };
            };
            ReceivePurchasesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceivePurchasesGrid);
            return ReceivePurchasesGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ReceivePurchasesGrid = ReceivePurchasesGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchaseTrailDialog = (function (_super) {
            __extends(PurchaseTrailDialog, _super);
            function PurchaseTrailDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.PurchaseTrailForm(this.idPrefix);
            }
            PurchaseTrailDialog.prototype.getFormKey = function () { return BusinessObjects.PurchaseTrailForm.formKey; };
            PurchaseTrailDialog.prototype.getIdProperty = function () { return BusinessObjects.PurchaseTrailRow.idProperty; };
            PurchaseTrailDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchaseTrailRow.localTextPrefix; };
            PurchaseTrailDialog.prototype.getService = function () { return BusinessObjects.PurchaseTrailService.baseUrl; };
            PurchaseTrailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchaseTrailDialog);
            return PurchaseTrailDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.PurchaseTrailDialog = PurchaseTrailDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchaseTrailGrid = (function (_super) {
            __extends(PurchaseTrailGrid, _super);
            function PurchaseTrailGrid(container) {
                _super.call(this, container);
            }
            PurchaseTrailGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.PurchaseTrail'; };
            PurchaseTrailGrid.prototype.getDialogType = function () { return BusinessObjects.PurchaseTrailDialog; };
            PurchaseTrailGrid.prototype.getIdProperty = function () { return BusinessObjects.PurchaseTrailRow.idProperty; };
            PurchaseTrailGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchaseTrailRow.localTextPrefix; };
            PurchaseTrailGrid.prototype.getService = function () { return BusinessObjects.PurchaseTrailService.baseUrl; };
            PurchaseTrailGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                return btns;
            };
            PurchaseTrailGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PurchaseTrailGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.purchasesID;
            };
            Object.defineProperty(PurchaseTrailGrid.prototype, "purchasesID", {
                get: function () {
                    return this._purchasesId;
                },
                set: function (value) {
                    if (this._purchasesId != value) {
                        this._purchasesId = value;
                        this.setEquality(BusinessObjects.PurchaseTrailRow.Fields.PurchasesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            PurchaseTrailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseTrailGrid);
            return PurchaseTrailGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.PurchaseTrailGrid = PurchaseTrailGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesUoMAndPriceDialog = (function (_super) {
            __extends(PurchasesUoMAndPriceDialog, _super);
            function PurchasesUoMAndPriceDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.PurchasesUoMAndPriceForm(this.idPrefix);
            }
            PurchasesUoMAndPriceDialog.prototype.getFormKey = function () { return BusinessObjects.PurchasesUoMAndPriceForm.formKey; };
            PurchasesUoMAndPriceDialog.prototype.getIdProperty = function () { return BusinessObjects.PurchasesUoMAndPriceRow.idProperty; };
            PurchasesUoMAndPriceDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesUoMAndPriceRow.localTextPrefix; };
            PurchasesUoMAndPriceDialog.prototype.getNameProperty = function () { return BusinessObjects.PurchasesUoMAndPriceRow.nameProperty; };
            PurchasesUoMAndPriceDialog.prototype.getService = function () { return BusinessObjects.PurchasesUoMAndPriceService.baseUrl; };
            PurchasesUoMAndPriceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchasesUoMAndPriceDialog);
            return PurchasesUoMAndPriceDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.PurchasesUoMAndPriceDialog = PurchasesUoMAndPriceDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesUoMAndPriceEditor = (function (_super) {
            __extends(PurchasesUoMAndPriceEditor, _super);
            function PurchasesUoMAndPriceEditor(container) {
                _super.call(this, container);
            }
            PurchasesUoMAndPriceEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.PurchasesUoMAndPrice'; };
            PurchasesUoMAndPriceEditor.prototype.getDialogType = function () { return BusinessObjects.PurchasesUoMAndPriceEditorDialog; };
            PurchasesUoMAndPriceEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesUoMAndPriceRow.localTextPrefix; };
            PurchasesUoMAndPriceEditor.prototype.addButtonClick = function () {
            };
            PurchasesUoMAndPriceEditor.prototype.getAddButtonCaption = function () {
                return 'New purchases UOM and price';
            };
            PurchasesUoMAndPriceEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchasesUoMAndPriceEditor);
            return PurchasesUoMAndPriceEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.PurchasesUoMAndPriceEditor = PurchasesUoMAndPriceEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesUoMAndPriceEditorDialog = (function (_super) {
            __extends(PurchasesUoMAndPriceEditorDialog, _super);
            function PurchasesUoMAndPriceEditorDialog() {
                _super.call(this);
                this.form = new BusinessObjects.PurchasesUoMAndPriceForm(this.idPrefix);
            }
            PurchasesUoMAndPriceEditorDialog.prototype.getFormKey = function () { return BusinessObjects.PurchasesUoMAndPriceForm.formKey; };
            PurchasesUoMAndPriceEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesUoMAndPriceRow.localTextPrefix; };
            PurchasesUoMAndPriceEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.PurchasesUoMAndPriceRow.nameProperty; };
            PurchasesUoMAndPriceEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchasesUoMAndPriceEditorDialog);
            return PurchasesUoMAndPriceEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.PurchasesUoMAndPriceEditorDialog = PurchasesUoMAndPriceEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesUoMAndPriceGrid = (function (_super) {
            __extends(PurchasesUoMAndPriceGrid, _super);
            function PurchasesUoMAndPriceGrid(container) {
                _super.call(this, container);
            }
            PurchasesUoMAndPriceGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.PurchasesUoMAndPrice'; };
            PurchasesUoMAndPriceGrid.prototype.getDialogType = function () { return BusinessObjects.PurchasesUoMAndPriceDialog; };
            PurchasesUoMAndPriceGrid.prototype.getIdProperty = function () { return BusinessObjects.PurchasesUoMAndPriceRow.idProperty; };
            PurchasesUoMAndPriceGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesUoMAndPriceRow.localTextPrefix; };
            PurchasesUoMAndPriceGrid.prototype.getService = function () { return BusinessObjects.PurchasesUoMAndPriceService.baseUrl; };
            PurchasesUoMAndPriceGrid.prototype.getInitialTitle = function () {
                return "Purchases UoM and Price";
            };
            PurchasesUoMAndPriceGrid.prototype.addButtonClick = function () {
                this.editItem({ ProductId: this.productID });
            };
            Object.defineProperty(PurchasesUoMAndPriceGrid.prototype, "productID", {
                get: function () {
                    return this._productID;
                },
                set: function (value) {
                    if (this._productID != value) {
                        this._productID = value;
                        this.setEquality(BusinessObjects.PurchasesUoMAndPriceRow.Fields.ProductId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            PurchasesUoMAndPriceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchasesUoMAndPriceGrid);
            return PurchasesUoMAndPriceGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.PurchasesUoMAndPriceGrid = PurchasesUoMAndPriceGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesPaymentDetailsDialog = (function (_super) {
            __extends(PurchasesPaymentDetailsDialog, _super);
            function PurchasesPaymentDetailsDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.PurchasesPaymentDetailsForm(this.idPrefix);
            }
            PurchasesPaymentDetailsDialog.prototype.getFormKey = function () { return BusinessObjects.PurchasesPaymentDetailsForm.formKey; };
            PurchasesPaymentDetailsDialog.prototype.getIdProperty = function () { return BusinessObjects.PurchasesPaymentDetailsRow.idProperty; };
            PurchasesPaymentDetailsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesPaymentDetailsRow.localTextPrefix; };
            PurchasesPaymentDetailsDialog.prototype.getService = function () { return BusinessObjects.PurchasesPaymentDetailsService.baseUrl; };
            PurchasesPaymentDetailsDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                this.purchasesDialogReference.UpdatePurchases();
            };
            Object.defineProperty(PurchasesPaymentDetailsDialog.prototype, "PurchasesDialogReference", {
                set: function (value) {
                    this.purchasesDialogReference = value;
                },
                enumerable: true,
                configurable: true
            });
            PurchasesPaymentDetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchasesPaymentDetailsDialog);
            return PurchasesPaymentDetailsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.PurchasesPaymentDetailsDialog = PurchasesPaymentDetailsDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesPaymentDetailsEditor = (function (_super) {
            __extends(PurchasesPaymentDetailsEditor, _super);
            function PurchasesPaymentDetailsEditor(container) {
                _super.call(this, container);
            }
            PurchasesPaymentDetailsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.PurchasesPaymentsDetails'; };
            PurchasesPaymentDetailsEditor.prototype.getDialogType = function () { return BusinessObjects.PurchasesPaymentDetailsEditorDialog; };
            PurchasesPaymentDetailsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesPaymentDetailsRow.localTextPrefix; };
            PurchasesPaymentDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchasesPaymentDetailsEditor);
            return PurchasesPaymentDetailsEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.PurchasesPaymentDetailsEditor = PurchasesPaymentDetailsEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesPaymentDetailsEditorDialog = (function (_super) {
            __extends(PurchasesPaymentDetailsEditorDialog, _super);
            function PurchasesPaymentDetailsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.PurchasesPaymentDetailsForm(this.idPrefix);
            }
            PurchasesPaymentDetailsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.PurchasesPaymentDetailsForm.formKey; };
            PurchasesPaymentDetailsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesPaymentDetailsRow.localTextPrefix; };
            PurchasesPaymentDetailsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchasesPaymentDetailsEditorDialog);
            return PurchasesPaymentDetailsEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.PurchasesPaymentDetailsEditorDialog = PurchasesPaymentDetailsEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesPaymentDetailsGrid = (function (_super) {
            __extends(PurchasesPaymentDetailsGrid, _super);
            function PurchasesPaymentDetailsGrid(container) {
                _super.call(this, container);
            }
            PurchasesPaymentDetailsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.PurchasesPaymentsDetails'; };
            PurchasesPaymentDetailsGrid.prototype.getDialogType = function () { return BusinessObjects.PurchasesPaymentDetailsDialog; };
            PurchasesPaymentDetailsGrid.prototype.getIdProperty = function () { return BusinessObjects.PurchasesPaymentDetailsRow.idProperty; };
            PurchasesPaymentDetailsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesPaymentDetailsRow.localTextPrefix; };
            PurchasesPaymentDetailsGrid.prototype.getService = function () { return BusinessObjects.PurchasesPaymentDetailsService.baseUrl; };
            PurchasesPaymentDetailsGrid.prototype.addButtonClick = function () {
                var dlg = new BusinessObjects.PurchasesPaymentDetailsDialog();
                dlg.loadEntityAndOpenDialog({ PurchasesId: this.purchasesID });
                dlg.PurchasesDialogReference = this._purchasesDialogRef;
                this.initDialog(dlg);
                return false;
                //this.editItem({ PurchasesId: this.purchasesID });
            };
            PurchasesPaymentDetailsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PurchasesPaymentDetailsGrid.prototype.getGridCanLoad = function () {
                return this._purchasesId != null;
            };
            Object.defineProperty(PurchasesPaymentDetailsGrid.prototype, "purchasesID", {
                get: function () {
                    return this._purchasesId;
                },
                set: function (value) {
                    if (this._purchasesId != value) {
                        this._purchasesId = value;
                        this.setEquality(BusinessObjects.PurchasesPaymentDetailsRow.Fields.PurchasesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PurchasesPaymentDetailsGrid.prototype, "PurchasesDialogRef", {
                set: function (value) {
                    this._purchasesDialogRef = value;
                },
                enumerable: true,
                configurable: true
            });
            PurchasesPaymentDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchasesPaymentDetailsGrid);
            return PurchasesPaymentDetailsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.PurchasesPaymentDetailsGrid = PurchasesPaymentDetailsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesDetailsDialog = (function (_super) {
            __extends(PurchasesDetailsDialog, _super);
            function PurchasesDetailsDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.PurchasesDetailsForm(this.idPrefix);
                this.form.ProductId.changeSelect2(function (e) {
                    _this.form.UnitPrice.value = null;
                    _this.form.Amount.value = null;
                });
                this.form.UomAndPriceId.changeSelect2(function (e) {
                    _this.checkDivisibility();
                    var uomAndPriceId = Q.toId(_this.form.UomAndPriceId.value);
                    if (uomAndPriceId != null) {
                        _this.form.UnitPrice.value = BusinessObjects.PurchasesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                        _this.calculateAmount();
                    }
                });
                this.form.Quantity.change(function (e) {
                    _this.checkDivisibility();
                    _this.calculateAmount();
                });
                this.form.UnitPrice.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.Discount.change(function (e) {
                    _this.form.Discount.value = (_this.form.Discount.value / 100);
                    _this.calculateAmount();
                });
            } //Ends the constructor 
            PurchasesDetailsDialog.prototype.getFormKey = function () { return BusinessObjects.PurchasesDetailsForm.formKey; };
            PurchasesDetailsDialog.prototype.getIdProperty = function () { return BusinessObjects.PurchasesDetailsRow.idProperty; };
            PurchasesDetailsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesDetailsRow.localTextPrefix; };
            PurchasesDetailsDialog.prototype.getService = function () { return BusinessObjects.PurchasesDetailsService.baseUrl; };
            PurchasesDetailsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.PurchasesId.value = BusinessObjects.GlobalScripts.purchasesId;
                //Q.notifyInfo('From GlobalScripts: ' +  GlobalScripts.purchasesId)
                //Q.notifyInfo(this.form.PurchasesId.value)
            };
            PurchasesDetailsDialog.prototype.checkDivisibility = function () {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                var quantity = this.form.Quantity.value;
                if (uomAndPriceId != '' && uomAndPriceId != null && !isNaN(quantity)) {
                    var val = BusinessObjects.PurchasesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].UnitMakeUp * quantity;
                    var x = /^\d+$/; //alert(x.test(val.toString()) + ' ' + val.toString())
                    if (!x.test(val.toString())) {
                        this.form.Quantity.value = null;
                        alert("Quantity is not in right divisibility " + val);
                    }
                }
            };
            PurchasesDetailsDialog.prototype.calculateAmount = function () {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                var unitPrice = this.form.UnitPrice.value;
                if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                    if (discount != undefined && discount != 0) {
                        var amount1 = (unitPrice * quantity);
                        var amount2 = (unitPrice * quantity) * (discount);
                        this.form.Amount.value = amount1 - amount2;
                    }
                    else
                        this.form.Amount.value = unitPrice * quantity;
                }
            }; //Ends the calculateAmount
            PurchasesDetailsDialog.prototype.save_submitHandler = function () {
                alert('Im clicked');
                return false;
            };
            PurchasesDetailsDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                this.purchasesDialogReference.UpdatePurchases();
            };
            Object.defineProperty(PurchasesDetailsDialog.prototype, "PurchasesDialogReference", {
                set: function (value) {
                    this.purchasesDialogReference = value;
                },
                enumerable: true,
                configurable: true
            });
            PurchasesDetailsDialog.prototype.onDeleteSuccess = function (response) {
                _super.prototype.onDeleteSuccess.call(this, response);
                this.purchasesDialogReference.UpdatePurchases();
            };
            PurchasesDetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchasesDetailsDialog);
            return PurchasesDetailsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.PurchasesDetailsDialog = PurchasesDetailsDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesDetailsEditor = (function (_super) {
            __extends(PurchasesDetailsEditor, _super);
            function PurchasesDetailsEditor(container) {
                _super.call(this, container);
            }
            PurchasesDetailsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.PurchasesDetails'; };
            PurchasesDetailsEditor.prototype.getDialogType = function () { return BusinessObjects.PurchasesDetailsEditorDialog; };
            PurchasesDetailsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesDetailsRow.localTextPrefix; };
            PurchasesDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchasesDetailsEditor);
            return PurchasesDetailsEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.PurchasesDetailsEditor = PurchasesDetailsEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesDetailsEditorDialog = (function (_super) {
            __extends(PurchasesDetailsEditorDialog, _super);
            function PurchasesDetailsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.PurchasesDetailsForm(this.idPrefix);
            }
            PurchasesDetailsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.PurchasesDetailsForm.formKey; };
            PurchasesDetailsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesDetailsRow.localTextPrefix; };
            PurchasesDetailsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchasesDetailsEditorDialog);
            return PurchasesDetailsEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.PurchasesDetailsEditorDialog = PurchasesDetailsEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesDetailsGrid = (function (_super) {
            __extends(PurchasesDetailsGrid, _super);
            function PurchasesDetailsGrid(container) {
                _super.call(this, container);
            }
            PurchasesDetailsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.PurchasesDetails'; };
            PurchasesDetailsGrid.prototype.getDialogType = function () { return BusinessObjects.PurchasesDetailsDialog; };
            PurchasesDetailsGrid.prototype.getIdProperty = function () { return BusinessObjects.PurchasesDetailsRow.idProperty; };
            PurchasesDetailsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesDetailsRow.localTextPrefix; };
            PurchasesDetailsGrid.prototype.getService = function () { return BusinessObjects.PurchasesDetailsService.baseUrl; };
            PurchasesDetailsGrid.prototype.addButtonClick = function () {
                var dlg = new BusinessObjects.PurchasesDetailsDialog();
                dlg.loadEntityAndOpenDialog({ PurchasesId: this.purchasesID });
                dlg.PurchasesDialogReference = this._purchasesDialogRef;
                this.initDialog(dlg);
                return false;
                //this.editItem({ PurchasesId: this.purchasesID });
            };
            PurchasesDetailsGrid.prototype.onClick = function (e, row, cell) {
                e.preventDefault();
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.hasClass("s-BusinessObjects-PurchasesDetailsLink")) {
                    var dlg = new BusinessObjects.PurchasesDetailsDialog();
                    dlg.PurchasesDialogReference = this._purchasesDialogRef;
                    dlg.loadByIdAndOpenDialog(item.PurchasesDetailsId);
                    this.initDialog(dlg);
                }
            };
            PurchasesDetailsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PurchasesDetailsGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PurchasesDetailsGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.purchasesID;
            };
            Object.defineProperty(PurchasesDetailsGrid.prototype, "purchasesID", {
                get: function () {
                    return this._purchasesId;
                },
                set: function (value) {
                    if (this._purchasesId != value) {
                        this._purchasesId = value;
                        this.setEquality(BusinessObjects.PurchasesDetailsRow.Fields.PurchasesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PurchasesDetailsGrid.prototype, "PurchasesDialogRef", {
                set: function (value) {
                    this._purchasesDialogRef = value;
                },
                enumerable: true,
                configurable: true
            });
            PurchasesDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchasesDetailsGrid);
            return PurchasesDetailsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.PurchasesDetailsGrid = PurchasesDetailsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesDialog = (function (_super) {
            __extends(PurchasesDialog, _super);
            function PurchasesDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.PurchasesForm(this.idPrefix);
                this.once = true;
                //this.initChildren();
                //this.purchaseOrdersGrid = new PurchasesDetailsGrid(this.byId("PurchaseOrdersGrid"));
                this.receiveGrid = new BusinessObjects.ReceivePurchasesGrid(this.byId("ReceiveGrid"));
                this.paymentGrid = new BusinessObjects.PurchasesPaymentDetailsGrid(this.byId("PaymentGrid"));
                this.paymentGrid.PurchasesDialogRef = this;
                this.returnGrid = new BusinessObjects.ReturnOutwardsDetailsGrid(this.byId("ReturnGrid"));
                this.returnGrid.PurchasesDialogRef = this;
                this.returnOutardsPaymentGrid = new BusinessObjects.ReturnOutwardsPaymentGrid(this.byId("ReturnOutwardsPaymentGrid"));
                this.unstockGrid = new BusinessObjects.UnstockGrid(this.byId("UnstockGrid"));
                this.notes = new BusinessObjects.NotesGrid(this.byId("Notes"));
                this.purchaseTrails = new BusinessObjects.PurchaseTrailGrid(this.byId("PurchaseTrails"));
                this.getPropertyItems().filter(function (x) { return (x.name != 'Discount'); });
                this.purchasesPropertyGrid = new Serenity.PropertyGrid(this.byId("PurchasesPropertyGrid"), {
                    idPrefix: this.idPrefix + "_Purchases_",
                    items: Q.getForm(InventoryManagement.BusinessObjects.PurchasesForm.formKey).filter(function (x) { return (x.name != 'PurchasesId' && x.name != 'OrderId' && x.name != 'Date' && x.name != 'SupplierId' && x.name != 'LocationId'); }),
                    useCategories: true
                });
                this.purchasesPropertyGrid.change(function (x) { _this.calculateAmount(); });
                new Serenity.Toolbar(this.byId("PurchasesToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                _this.calculateAmount();
                                var purchasesEntity = ({});
                                _this.purchasesPropertyGrid.save(purchasesEntity);
                                BusinessObjects.PurchasesService.Update({
                                    EntityId: BusinessObjects.GlobalScripts.purchasesId,
                                    Entity: purchasesEntity
                                }, function (response) {
                                    // reload customer list just in case
                                    //Q.reloadLookup(BusinessObjects.ReorderPointRow.lookupKey);
                                    _this.purchasesPropertyGrid.save(_this.entity);
                                    Q.notifySuccess("Save successful");
                                });
                            }
                        }]
                });
                this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
                this.form.OrderId.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
            }
            PurchasesDialog.prototype.getFormKey = function () { return BusinessObjects.PurchasesForm.formKey; };
            PurchasesDialog.prototype.getIdProperty = function () { return BusinessObjects.PurchasesRow.idProperty; };
            PurchasesDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesRow.localTextPrefix; };
            PurchasesDialog.prototype.getNameProperty = function () { return BusinessObjects.PurchasesRow.nameProperty; };
            PurchasesDialog.prototype.getService = function () { return BusinessObjects.PurchasesService.baseUrl; };
            PurchasesDialog.prototype.getPropertyItems = function () {
                var items = _super.prototype.getPropertyItems.call(this);
                items = items.filter(function (x) { return (x.name != "Discount" && x.name != "Tax" && x.name != 'TotalAmount' && x.name != 'TotalAmountLeft' && x.name != 'TotalAmountPaid'); });
                return items;
            };
            PurchasesDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                BusinessObjects.GlobalScripts.purchasesId = entity.PurchasesId;
                BusinessObjects.GlobalScripts.locationId = entity.LocationId;
                if (this.isNewOrDeleted()) {
                    //this.purchaseOrdersGrid.element.hide();
                    //alert('In here')
                    Serenity.TabsExtensions.setDisabled(this.tabs, "PurchaseOrders", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Receive", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Return", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Unstock", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Notes", true);
                    this.toolbar.findButton("approve-button").hide();
                    this.toolbar.findButton("refresh-button").hide();
                    this.toolbar.findButton("document-check").hide();
                    this.toolbar.findButton("documents-stack").hide();
                }
                else {
                    if (this.purchaseOrdersGrid == undefined)
                        this.initChildren();
                    this.purchaseOrdersGrid.purchasesID = entity.PurchasesId;
                    this.receiveGrid.purchasesID = this.entityId;
                    this.paymentGrid.purchasesID = this.entityId;
                    this.returnGrid.purchasesID = this.entityId;
                    this.unstockGrid.purchasesID = this.entityId;
                    this.returnOutardsPaymentGrid.purchasesID = this.entityId;
                    this.notes.purchasesID = this.entityId;
                    this.purchaseTrails.purchasesID = this.entityId;
                    this.setToSimplePurchase();
                    if (this.once) {
                        //   this.toolbar.findButton("document-check").show();
                        //   this.toolbar.findButton("approve-button").show();
                        this.once = false;
                    }
                    Serenity.EditorUtils.setReadOnly(this.form.OrderId, true);
                }
                //this.byId("PurchaseOrdersGrid").hide();
                var editors = this.purchasesPropertyGrid.get_editors();
                try {
                    for (var x = 10; x < editors.length; x++) {
                        Serenity.EditorUtils.setReadOnly(new Serenity.Widget(editors[x].element), true);
                    }
                }
                catch (e) { }
                this.purchasesPropertyGrid.load(entity);
            };
            PurchasesDialog.prototype.UpdatePurchases = function () {
                var _this = this;
                InventoryManagement.BusinessObjects.PurchasesService.List({
                    Criteria: [Serenity.Criteria("PurchasesId"), '=', this.form.PurchasesId.value]
                }, function (response) {
                    if (response.Entities.length != 0) {
                        _this.purchasesPropertyGrid.load(response.Entities[0]);
                    }
                });
                //for (var x = 10; x < editors.length; x++) {
                //    Serenity.EditorUtils.setReadOnly(new Serenity.Widget(editors[x].element), true)
                //}
            };
            PurchasesDialog.prototype.calculateAmount = function () {
                var purchasesEntity = ({});
                this.purchasesPropertyGrid.save(purchasesEntity);
                var amt = purchasesEntity.TotalAmount;
                if (purchasesEntity.Discount != null && purchasesEntity.Discount > 0) {
                    amt = amt - purchasesEntity.Discount;
                }
                if (purchasesEntity.Tax != null && purchasesEntity.Tax > 0) {
                    amt = amt + purchasesEntity.Tax;
                }
                purchasesEntity.TotalAmountLeft = amt - purchasesEntity.TotalAmountPaid;
                this.purchasesPropertyGrid.load(purchasesEntity);
            }; //Ends the calculateAmount
            PurchasesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("document-check").hide();
                if (!this.isNewOrDeleted()) {
                    if (this.form.IsAdvanced.value == true) {
                        this.setToAdvancedPurchase();
                    }
                    else
                        this.setToSimplePurchase();
                    if (this.form.Status.value == 'Fully Received') {
                        this.toggleCompleteReOpenButtons(true);
                    }
                    else
                        this.toggleCompleteReOpenButtons(false);
                }
            };
            PurchasesDialog.prototype.toggleCompleteReOpenButtons = function (isCompleted) {
                if (isCompleted) {
                    this.toolbar.findButton("refresh-button").show();
                    this.toolbar.findButton("approve-button").hide();
                }
                else {
                    this.toolbar.findButton("refresh-button").hide();
                    this.toolbar.findButton("approve-button").show();
                }
            };
            PurchasesDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var btns = buttons;
                //var btns = buttons.filter(x => x.cssClass != 'save-and-close-button');
                btns.push({
                    cssClass: 'documents-stack',
                    title: 'Convert to Advance Purchases',
                    onClick: function () {
                        var requestObj = _this.GetRequestObject(_this.form.LocationId.value, _this.form.PurchasesId.value);
                        var url = "BusinessObjects/Purchases/ConvertToAdvancedPurchase";
                        Q.serviceRequest(url, requestObj, function (response) {
                            _this.setToAdvancedPurchase();
                            Q.notifySuccess("Conversion to Advanced purchase successfull.");
                        });
                    },
                });
                btns.push({
                    cssClass: 'document-check',
                    title: 'Convert to Simple Purchases',
                    onClick: function () {
                        var requestObj = _this.GetRequestObject(_this.form.LocationId.value, _this.form.PurchasesId.value);
                        var url = "BusinessObjects/Purchases/ConvertToSimplePurchase";
                        Q.serviceRequest(url, requestObj, function (response) {
                            _this.setToSimplePurchase();
                            Q.notifySuccess("Conversion to Simple purchase successfull.");
                        });
                    },
                });
                btns.push({
                    cssClass: 'approve-button',
                    title: 'Complete Purchases',
                    onClick: function () {
                        //Q.alert('About to show')
                        var requestObj = _this.GetRequestObject(_this.form.LocationId.value, _this.form.PurchasesId.value);
                        var url = "BusinessObjects/Purchases/CompletePurchase";
                        Q.serviceRequest(url, requestObj, function (response) {
                            _this.toggleCompleteReOpenButtons(true);
                            //Q.notifySuccess(response.LocationId + "\n\n" + response.PurchaseId)
                            Q.notifySuccess("Complete purchase successfull");
                        });
                    },
                });
                btns.push({
                    cssClass: 'refresh-button',
                    title: 'Re-open Order',
                    onClick: function () {
                        var requestObj = _this.GetRequestObject(_this.form.LocationId.value, _this.form.PurchasesId.value);
                        var url = "BusinessObjects/Purchases/ReopenOrder";
                        Q.serviceRequest(url, requestObj, function (response) {
                            _this.toggleCompleteReOpenButtons(false);
                            //Q.notifySuccess("Order reopened: " + response.LocationId + "\n\n" + response.PurchaseId)
                            Q.notifySuccess("Order reopen successfull");
                            _this.UpdatePurchases();
                        });
                    },
                });
                btns.push({
                    cssClass: 'print-preview-button',
                    title: 'Print purchases orders',
                    onClick: function () {
                        open(Q.format("/BusinessObjects/Purchases/PurchaseOrders?id={0}", BusinessObjects.GlobalScripts.purchasesId));
                    },
                });
                btns.push({
                    cssClass: 'print-preview-button',
                    title: 'Print Invoice',
                    onClick: function () {
                        open("/BusinessObjects/Purchases/PurchaseInvoice");
                    },
                });
                return btns;
                //return buttons;
            };
            PurchasesDialog.prototype.initChildren = function () {
                if (!this.isNewOrDeleted()) {
                    this.purchaseOrdersGrid = new BusinessObjects.PurchasesDetailsGrid(this.byId("PurchaseOrdersGrid"));
                    this.purchaseOrdersGrid.PurchasesDialogRef = this;
                }
            };
            PurchasesDialog.prototype.GetRequestObject = function (locationId, purchaseId) {
                var requestObj = {
                    LocationId: locationId,
                    PurchasesId: purchaseId
                };
                return requestObj;
            };
            PurchasesDialog.prototype.setToSimplePurchase = function () {
                this.toolbar.findButton("document-check").hide();
                this.toolbar.findButton("documents-stack").show();
                // this.toolbar.findButton("approve-button").show();
                // this.toolbar.findButton("refresh-button").hide();
                Serenity.TabsExtensions.setDisabled(this.tabs, "PurchaseOrders", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Notes", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Receive", true);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Return", true);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Unstock", true);
                //this.purchaseOrdersGrid.element.show();
            };
            PurchasesDialog.prototype.setToAdvancedPurchase = function () {
                this.toolbar.findButton("documents-stack").hide();
                this.toolbar.findButton("document-check").show();
                Serenity.TabsExtensions.setDisabled(this.tabs, "PurchaseOrders", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Receive", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Return", false);
                Serenity.TabsExtensions.setDisabled(this.tabs, "Unstock", false);
            };
            /****************************************************************** */
            PurchasesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            PurchasesDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.OrderId.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'PO').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    BusinessObjects.PurchasesService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.OrderId.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.OrderId.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            PurchasesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], PurchasesDialog);
            return PurchasesDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.PurchasesDialog = PurchasesDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesEditor = (function (_super) {
            __extends(PurchasesEditor, _super);
            function PurchasesEditor(container) {
                _super.call(this, container);
            }
            PurchasesEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Purchases'; };
            PurchasesEditor.prototype.getDialogType = function () { return BusinessObjects.PurchasesEditorDialog; };
            PurchasesEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesRow.localTextPrefix; };
            PurchasesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchasesEditor);
            return PurchasesEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.PurchasesEditor = PurchasesEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesEditorDialog = (function (_super) {
            __extends(PurchasesEditorDialog, _super);
            function PurchasesEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.PurchasesForm(this.idPrefix);
            }
            PurchasesEditorDialog.prototype.getFormKey = function () { return BusinessObjects.PurchasesForm.formKey; };
            PurchasesEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesRow.localTextPrefix; };
            PurchasesEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.PurchasesRow.nameProperty; };
            PurchasesEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchasesEditorDialog);
            return PurchasesEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.PurchasesEditorDialog = PurchasesEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PurchasesGrid = (function (_super) {
            __extends(PurchasesGrid, _super);
            function PurchasesGrid(container) {
                _super.call(this, container);
            }
            PurchasesGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Purchases'; };
            PurchasesGrid.prototype.getDialogType = function () { return BusinessObjects.PurchasesDialog; };
            PurchasesGrid.prototype.getIdProperty = function () { return BusinessObjects.PurchasesRow.idProperty; };
            PurchasesGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PurchasesRow.localTextPrefix; };
            PurchasesGrid.prototype.getService = function () { return BusinessObjects.PurchasesService.baseUrl; };
            PurchasesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchasesGrid);
            return PurchasesGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.PurchasesGrid = PurchasesGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductSupplier2Grid = (function (_super) {
            __extends(ProductSupplier2Grid, _super);
            function ProductSupplier2Grid(container) {
                _super.call(this, container);
            }
            ProductSupplier2Grid.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductSupplier2'; };
            ProductSupplier2Grid.prototype.getDialogType = function () { return BusinessObjects.ProductSupplierDialog; };
            ProductSupplier2Grid.prototype.getIdProperty = function () { return BusinessObjects.SupplierRow.idProperty; };
            ProductSupplier2Grid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierRow.localTextPrefix; };
            ProductSupplier2Grid.prototype.getService = function () { return BusinessObjects.SupplierService.baseUrl; };
            ProductSupplier2Grid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return btns;
            };
            ProductSupplier2Grid.prototype.getInitialTitle = function () {
                return null;
            };
            ProductSupplier2Grid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSupplier2Grid);
            return ProductSupplier2Grid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductSupplier2Grid = ProductSupplier2Grid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductSupplier3Grid = (function (_super) {
            __extends(ProductSupplier3Grid, _super);
            function ProductSupplier3Grid(container) {
                _super.call(this, container);
            }
            ProductSupplier3Grid.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductSupplier2'; };
            ProductSupplier3Grid.prototype.getDialogType = function () { return BusinessObjects.SupplierDialog; };
            ProductSupplier3Grid.prototype.getIdProperty = function () { return BusinessObjects.SupplierRow.idProperty; };
            ProductSupplier3Grid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SupplierRow.localTextPrefix; };
            ProductSupplier3Grid.prototype.getService = function () { return BusinessObjects.SupplierService.baseUrl; };
            ProductSupplier3Grid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return btns;
            };
            ProductSupplier3Grid.prototype.getAddButtonCaption = function () {
                return "Add Supplier(s)";
            };
            ProductSupplier3Grid.prototype.addButtonClick = function () {
                var selectedIDs = this.rowSelection.getSelectedKeys();
                if (selectedIDs.length == 0) {
                    Q.notifyWarning("Please select some records to process");
                    return;
                }
                BusinessObjects.ProductService.AddSupplier({
                    ProductId: BusinessObjects.GlobalScripts.ProductId,
                    SupplierObjectsList: this.GetSupplierList(selectedIDs)
                }, function (response) { $("div.s-BusinessObjects-ProductSupplierDialog > div.ui-dialog-titlebar > button").click(); $(".refresh-button").click(); });
                return false;
            };
            ProductSupplier3Grid.prototype.GetSupplierList = function (ids) {
                return $.map(ids, function (elem, index) {
                    return { ProductId: BusinessObjects.GlobalScripts.ProductId, SupplierId: elem };
                });
            };
            ProductSupplier3Grid.prototype.getInitialTitle = function () {
                return null;
            };
            ProductSupplier3Grid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            ProductSupplier3Grid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            }; //Ends getColumns
            Object.defineProperty(ProductSupplier3Grid.prototype, "ProductID", {
                set: function (value) {
                    this._productId = value;
                },
                enumerable: true,
                configurable: true
            });
            ProductSupplier3Grid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSupplier3Grid);
            return ProductSupplier3Grid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductSupplier3Grid = ProductSupplier3Grid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductSupplier4Grid = (function (_super) {
            __extends(ProductSupplier4Grid, _super);
            function ProductSupplier4Grid(container) {
                _super.call(this, container);
            }
            ProductSupplier4Grid.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductSupplier4'; };
            ProductSupplier4Grid.prototype.getDialogType = function () { return BusinessObjects.SupplierProductDialog; };
            ProductSupplier4Grid.prototype.getIdProperty = function () { return BusinessObjects.ProductSupplierRow.idProperty; };
            ProductSupplier4Grid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductSupplierRow.localTextPrefix; };
            ProductSupplier4Grid.prototype.getService = function () { return BusinessObjects.ProductSupplierService.baseUrl; };
            ProductSupplier4Grid.prototype.addButtonClick = function () {
                //alert(this.supplierID)
                this.editItem({ SupplierId: this.supplierID });
            };
            ProductSupplier4Grid.prototype.onClick = function (e, row, cell) {
                e.preventDefault();
                var item = this.itemAt(row);
                var target = $(e.target);
                //this.editItem({ SupplierId: item.SupplierId })
                if (target.hasClass("s-BusinessObjects-ProductSupplier4Link")) {
                    //this.supplierID = item.SupplierId
                    var dlg = new BusinessObjects.SupplierProductDialog();
                    this.initDialog(dlg);
                    dlg.loadByIdAndOpenDialog(item.ProductId);
                }
            };
            //protected onClick(e: JQueryEventObject, row: number, cell: number) {
            //    super.onClick(e, row, cell);
            //    if (e.isDefaultPrevented())
            //        return;
            //    alert('Cliced 2')
            //    var item = this.itemAt(row);
            //    var target = $(e.target);
            //    // if user clicks "i" element, e.g. icon
            //    if (target.parent().hasClass('inline-action'))
            //        target = target.parent();
            //    alert('Cliced 3')
            //    if(target.hasClass("s-BusinessObjects-ProductSupplier4Link"))
            //    {
            //        alert('Cliced 4')
            //        var dlg = new ProductDialog()
            //        this.initDialog(dlg);
            //        dlg.loadByIdAndOpenDialog(item.ProductId)
            //     }
            //    alert('Cliced 5')
            //}//Ends onClick
            ProductSupplier4Grid.prototype.getInitialTitle = function () {
                return null;
            };
            ProductSupplier4Grid.prototype.getAddButtonCaption = function () {
                return "New Product";
            };
            ProductSupplier4Grid.prototype.getGridCanLoad = function () {
                return this.supplierID != null;
            };
            Object.defineProperty(ProductSupplier4Grid.prototype, "supplierID", {
                get: function () {
                    return this._supplierID;
                },
                set: function (value) {
                    if (this._supplierID != value) {
                        this._supplierID = value;
                        this.setEquality(BusinessObjects.ProductSupplierRow.Fields.SupplierId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ProductSupplier4Grid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSupplier4Grid);
            return ProductSupplier4Grid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductSupplier4Grid = ProductSupplier4Grid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductSupplierDialog = (function (_super) {
            __extends(ProductSupplierDialog, _super);
            function ProductSupplierDialog() {
                _super.call(this);
                this.form = new BusinessObjects.ProductSupplierForm(this.idPrefix);
                this.suppliersGrid = new BusinessObjects.ProductSupplier3Grid(this.byId("SuppliersGrid"));
            }
            ProductSupplierDialog.prototype.getFormKey = function () { return BusinessObjects.ProductSupplierForm.formKey; };
            ProductSupplierDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductSupplierRow.idProperty; };
            ProductSupplierDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductSupplierRow.localTextPrefix; };
            ProductSupplierDialog.prototype.getService = function () { return BusinessObjects.ProductSupplierService.baseUrl; };
            ProductSupplierDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductSupplierDialog);
            return ProductSupplierDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ProductSupplierDialog = ProductSupplierDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductSupplierGrid = (function (_super) {
            __extends(ProductSupplierGrid, _super);
            function ProductSupplierGrid(container) {
                _super.call(this, container);
            }
            ProductSupplierGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductSupplier'; };
            ProductSupplierGrid.prototype.getDialogType = function () { return BusinessObjects.ProductSupplierDialog; };
            ProductSupplierGrid.prototype.getIdProperty = function () { return BusinessObjects.ProductSupplierRow.idProperty; };
            ProductSupplierGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductSupplierRow.localTextPrefix; };
            ProductSupplierGrid.prototype.getService = function () { return BusinessObjects.ProductSupplierService.baseUrl; };
            //protected addButtonClick() {
            //    alert(this.productID)
            //    this.editItem({ ProductId: this.productID })
            //}
            ProductSupplierGrid.prototype.getInitialTitle = function () {
                return null;
            };
            ProductSupplierGrid.prototype.getAddButtonCaption = function () {
                return "Select suppliers";
            };
            ProductSupplierGrid.prototype.getGridCanLoad = function () {
                return this.productID != null;
            };
            Object.defineProperty(ProductSupplierGrid.prototype, "productID", {
                get: function () {
                    return this._productID;
                },
                set: function (value) {
                    if (this._productID != value) {
                        this._productID = value;
                        this.setEquality(BusinessObjects.ProductSupplierRow.Fields.ProductId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ProductSupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSupplierGrid);
            return ProductSupplierGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductSupplierGrid = ProductSupplierGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationDialog = (function (_super) {
            __extends(ProductLocationDialog, _super);
            function ProductLocationDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ProductLocationForm(this.idPrefix);
            }
            ProductLocationDialog.prototype.getFormKey = function () { return BusinessObjects.ProductLocationForm.formKey; };
            ProductLocationDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductLocationRow.idProperty; };
            ProductLocationDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductLocationRow.localTextPrefix; };
            ProductLocationDialog.prototype.getService = function () { return BusinessObjects.ProductLocationService.baseUrl; };
            ProductLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductLocationDialog);
            return ProductLocationDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ProductLocationDialog = ProductLocationDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationEditor = (function (_super) {
            __extends(ProductLocationEditor, _super);
            function ProductLocationEditor(container) {
                _super.call(this, container);
            }
            ProductLocationEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductLocation'; };
            ProductLocationEditor.prototype.getDialogType = function () { return BusinessObjects.ProductLocationEditorDialog; };
            ProductLocationEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductLocationRow.localTextPrefix; };
            ProductLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductLocationEditor);
            return ProductLocationEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ProductLocationEditor = ProductLocationEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationEditorDialog = (function (_super) {
            __extends(ProductLocationEditorDialog, _super);
            function ProductLocationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ProductLocationForm(this.idPrefix);
            }
            ProductLocationEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ProductLocationForm.formKey; };
            ProductLocationEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductLocationRow.localTextPrefix; };
            ProductLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductLocationEditorDialog);
            return ProductLocationEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ProductLocationEditorDialog = ProductLocationEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationGrid = (function (_super) {
            __extends(ProductLocationGrid, _super);
            function ProductLocationGrid(container) {
                _super.call(this, container);
            }
            ProductLocationGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductLocation'; };
            ProductLocationGrid.prototype.getDialogType = function () { return BusinessObjects.ProductLocationDialog; };
            ProductLocationGrid.prototype.getIdProperty = function () { return BusinessObjects.ProductLocationRow.idProperty; };
            ProductLocationGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductLocationRow.localTextPrefix; };
            ProductLocationGrid.prototype.getService = function () { return BusinessObjects.ProductLocationService.baseUrl; };
            ProductLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductLocationGrid);
            return ProductLocationGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductLocationGrid = ProductLocationGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryLocationDialog = (function (_super) {
            __extends(ProductCategoryLocationDialog, _super);
            function ProductCategoryLocationDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ProductCategoryLocationForm(this.idPrefix);
            }
            ProductCategoryLocationDialog.prototype.getFormKey = function () { return BusinessObjects.ProductCategoryLocationForm.formKey; };
            ProductCategoryLocationDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductCategoryLocationRow.idProperty; };
            ProductCategoryLocationDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductCategoryLocationRow.localTextPrefix; };
            ProductCategoryLocationDialog.prototype.getService = function () { return BusinessObjects.ProductCategoryLocationService.baseUrl; };
            ProductCategoryLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductCategoryLocationDialog);
            return ProductCategoryLocationDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ProductCategoryLocationDialog = ProductCategoryLocationDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryLocationEditor = (function (_super) {
            __extends(ProductCategoryLocationEditor, _super);
            function ProductCategoryLocationEditor(container) {
                _super.call(this, container);
            }
            ProductCategoryLocationEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductCategoryLocation'; };
            ProductCategoryLocationEditor.prototype.getDialogType = function () { return BusinessObjects.ProductCategoryLocationEditorDialog; };
            ProductCategoryLocationEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductCategoryLocationRow.localTextPrefix; };
            ProductCategoryLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductCategoryLocationEditor);
            return ProductCategoryLocationEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ProductCategoryLocationEditor = ProductCategoryLocationEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryLocationEditorDialog = (function (_super) {
            __extends(ProductCategoryLocationEditorDialog, _super);
            function ProductCategoryLocationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ProductCategoryLocationForm(this.idPrefix);
            }
            ProductCategoryLocationEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ProductCategoryLocationForm.formKey; };
            ProductCategoryLocationEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductCategoryLocationRow.localTextPrefix; };
            ProductCategoryLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductCategoryLocationEditorDialog);
            return ProductCategoryLocationEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ProductCategoryLocationEditorDialog = ProductCategoryLocationEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryLocationGrid = (function (_super) {
            __extends(ProductCategoryLocationGrid, _super);
            function ProductCategoryLocationGrid(container) {
                _super.call(this, container);
            }
            ProductCategoryLocationGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductCategoryLocation'; };
            ProductCategoryLocationGrid.prototype.getDialogType = function () { return BusinessObjects.ProductCategoryLocationDialog; };
            ProductCategoryLocationGrid.prototype.getIdProperty = function () { return BusinessObjects.ProductCategoryLocationRow.idProperty; };
            ProductCategoryLocationGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductCategoryLocationRow.localTextPrefix; };
            ProductCategoryLocationGrid.prototype.getService = function () { return BusinessObjects.ProductCategoryLocationService.baseUrl; };
            ProductCategoryLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductCategoryLocationGrid);
            return ProductCategoryLocationGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductCategoryLocationGrid = ProductCategoryLocationGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryDialog = (function (_super) {
            __extends(ProductCategoryDialog, _super);
            function ProductCategoryDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ProductCategoryForm(this.idPrefix);
            }
            ProductCategoryDialog.prototype.getFormKey = function () { return BusinessObjects.ProductCategoryForm.formKey; };
            ProductCategoryDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductCategoryRow.idProperty; };
            ProductCategoryDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductCategoryRow.localTextPrefix; };
            ProductCategoryDialog.prototype.getNameProperty = function () { return BusinessObjects.ProductCategoryRow.nameProperty; };
            ProductCategoryDialog.prototype.getService = function () { return BusinessObjects.ProductCategoryService.baseUrl; };
            ProductCategoryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductCategoryDialog);
            return ProductCategoryDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ProductCategoryDialog = ProductCategoryDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryEditor = (function (_super) {
            __extends(ProductCategoryEditor, _super);
            function ProductCategoryEditor(container) {
                _super.call(this, container);
            }
            ProductCategoryEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductCategory'; };
            ProductCategoryEditor.prototype.getDialogType = function () { return BusinessObjects.ProductCategoryEditorDialog; };
            ProductCategoryEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductCategoryRow.localTextPrefix; };
            ProductCategoryEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductCategoryEditor);
            return ProductCategoryEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ProductCategoryEditor = ProductCategoryEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryEditorDialog = (function (_super) {
            __extends(ProductCategoryEditorDialog, _super);
            function ProductCategoryEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ProductCategoryForm(this.idPrefix);
            }
            ProductCategoryEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ProductCategoryForm.formKey; };
            ProductCategoryEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductCategoryRow.localTextPrefix; };
            ProductCategoryEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.ProductCategoryRow.nameProperty; };
            ProductCategoryEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductCategoryEditorDialog);
            return ProductCategoryEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ProductCategoryEditorDialog = ProductCategoryEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductCategoryGrid = (function (_super) {
            __extends(ProductCategoryGrid, _super);
            function ProductCategoryGrid(container) {
                _super.call(this, container);
            }
            ProductCategoryGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductCategory'; };
            ProductCategoryGrid.prototype.getDialogType = function () { return BusinessObjects.ProductCategoryDialog; };
            ProductCategoryGrid.prototype.getIdProperty = function () { return BusinessObjects.ProductCategoryRow.idProperty; };
            ProductCategoryGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductCategoryRow.localTextPrefix; };
            ProductCategoryGrid.prototype.getService = function () { return BusinessObjects.ProductCategoryService.baseUrl; };
            ProductCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductCategoryGrid);
            return ProductCategoryGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductCategoryGrid = ProductCategoryGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PricingDialog = (function (_super) {
            __extends(PricingDialog, _super);
            function PricingDialog() {
                _super.call(this);
                this.form = new BusinessObjects.ProductForm(this.idPrefix);
            }
            PricingDialog.prototype.getFormKey = function () { return BusinessObjects.PricingForm.formKey; };
            PricingDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductRow.idProperty; };
            PricingDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            PricingDialog.prototype.getNameProperty = function () { return BusinessObjects.ProductRow.nameProperty; };
            PricingDialog.prototype.getService = function () { return BusinessObjects.ProductService.baseUrl; };
            PricingDialog.prototype.getPropertyItems = function () {
                "";
                var propertyItems = _super.prototype.getPropertyItems.call(this);
                return propertyItems.filter(function (x) { return x.name == BusinessObjects.ProductRow.Fields.PurchasesUoMAndPriceList; });
            };
            PricingDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PricingDialog);
            return PricingDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.PricingDialog = PricingDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductDialogCopy = (function (_super) {
            __extends(ProductDialogCopy, _super);
            function ProductDialogCopy() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.ProductForm(this.idPrefix);
                this.purchUoMAndPricingGrid = new BusinessObjects.PurchasesUoMAndPriceGrid(this.byId("PurchUoMAndPricingGrid"));
                this.slsUoMAndPricingGrid = new BusinessObjects.SalesUoMAndPriceGrid(this.byId("SlsUoMAndPricingGrid"));
                this.purchasesDetailsGrid = new BusinessObjects.ProductPurchasesDetailsGrid(this.byId("PurchasesDetailsGrid"));
                this.productSupplierGrid = new BusinessObjects.ProductSupplierGrid(this.byId("SuppliersGrid"));
                this.reOrderLevelPropertyGrid = new Serenity.PropertyGrid(this.byId("ReOrderLevelPropertyGrid"), {
                    idPrefix: this.idPrefix + "_ReOrderLevel_",
                    //items: Q.getForm(InventoryManagement.BusinessObjects.ReorderPointForm.formKey).filter(x => x.name != 'ProductId'),
                    items: Q.getForm(InventoryManagement.BusinessObjects.ReorderPointForm.formKey),
                    useCategories: true
                });
                this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
                var selfChange = 0;
                new Serenity.Toolbar(this.byId("ReOrderLevelToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.reOrderLevelId;
                                // prepare an empty entity to serialize customer details into
                                var c = { ProductId: _this.getProductId() };
                                _this.reOrderLevelPropertyGrid.save(c);
                                //if (!this.customerValidator.form())
                                //    return;
                                if (!id) {
                                    //alert('Create')
                                    BusinessObjects.ReorderPointService.Create({
                                        Entity: c
                                    }, function (response) {
                                        _this.reOrderLevelId = response.EntityId;
                                        Q.notifySuccess("Saved customer details");
                                    });
                                }
                                else {
                                    BusinessObjects.ReorderPointService.Update({
                                        EntityId: id,
                                        Entity: c
                                    }, function (response) {
                                        // reload customer list just in case
                                        //Q.reloadLookup(BusinessObjects.ReorderPointRow.lookupKey);
                                        Q.notifySuccess("Saved customer details");
                                    });
                                }
                            }
                        }]
                });
            }
            ProductDialogCopy.prototype.getFormKey = function () { return BusinessObjects.ProductForm.formKey; };
            ProductDialogCopy.prototype.getIdProperty = function () { return BusinessObjects.ProductRow.idProperty; };
            ProductDialogCopy.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductDialogCopy.prototype.getNameProperty = function () { return BusinessObjects.ProductRow.nameProperty; };
            ProductDialogCopy.prototype.getService = function () { return BusinessObjects.ProductService.baseUrl; };
            ProductDialogCopy.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.SupplierId, true);
            };
            ProductDialogCopy.prototype.loadEntity = function (prod) {
                var _this = this;
                _super.prototype.loadEntity.call(this, prod);
                //Serenity.TabsExtensions.setDisabled(this.tabs, "PurchasesDetails", this.isNewOrDeleted());
                //Q.reloadLookup(BusinessObjects.PurchasesUoMAndPriceRow.lookupKey)
                var productId = this.getProductId();
                Serenity.TabsExtensions.setDisabled(this.tabs, 'ReOrderLevel', !productId);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'PurchasesDetails', !productId);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Suppliers', !productId);
                if (!productId) {
                    // no product is selected, just load an empty entity
                    this.reOrderLevelPropertyGrid.load({});
                    return;
                }
                else {
                    this.productSupplierGrid.productID = productId;
                    this.purchUoMAndPricingGrid.productID = productId;
                    this.slsUoMAndPricingGrid.productID = productId;
                    BusinessObjects.GlobalScripts.ProductId = productId;
                    Q.reloadLookup("BusinessObjects.PurchasesUoMAndPrice");
                    //var criteria = [Serenity.Criteria("ProductId"), '=', productId]
                    // load selected customer into customer form by calling CustomerService
                    InventoryManagement.BusinessObjects.ReorderPointService.List({
                        Criteria: [Serenity.Criteria("ProductId"), '=', productId]
                    }, function (response) {
                        if (response.Entities.length != 0) {
                            _this.reOrderLevelId = response.Entities[0].ReorderPointId;
                            _this.reOrderLevelPropertyGrid.load(response.Entities[0]);
                        }
                    });
                }
            };
            ProductDialogCopy.prototype.getProductId = function () {
                var productId = this.form.ProductId.value;
                //if (Q.isEmptyOrNull(productId))
                //    return null;
                if (productId == null)
                    return null;
                // unfortunately, ProductId (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                //return Q.first(BusinessObjects.ProductRow.getLookup().items,
                //  x => x.ProductId == productId).ID;
                return productId;
            };
            ProductDialogCopy = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductDialogCopy);
            return ProductDialogCopy;
        }(Serenity.EntityDialog));
        BusinessObjects.ProductDialogCopy = ProductDialogCopy;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductEditor = (function (_super) {
            __extends(ProductEditor, _super);
            function ProductEditor(container) {
                _super.call(this, container);
            }
            ProductEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Product'; };
            ProductEditor.prototype.getDialogType = function () { return BusinessObjects.ProductEditorDialog; };
            ProductEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductEditor);
            return ProductEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.ProductEditor = ProductEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductEditorDialog = (function (_super) {
            __extends(ProductEditorDialog, _super);
            function ProductEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.ProductForm(this.idPrefix);
            }
            ProductEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ProductForm.formKey; };
            ProductEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.ProductRow.nameProperty; };
            ProductEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductEditorDialog);
            return ProductEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.ProductEditorDialog = ProductEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
///<reference path="../PurchasesDetails/PurchasesDetailsGrid.ts"/>
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductPurchasesDetailsGrid = (function (_super) {
            __extends(ProductPurchasesDetailsGrid, _super);
            function ProductPurchasesDetailsGrid(container) {
                _super.call(this, container);
            }
            ProductPurchasesDetailsGrid.prototype.getButtons = function () {
                return null;
            };
            ProductPurchasesDetailsGrid.prototype.getGridCanLoad = function () {
                return this.productID != null;
            };
            Object.defineProperty(ProductPurchasesDetailsGrid.prototype, "productID", {
                get: function () {
                    return this._productID;
                },
                set: function (value) {
                    if (this._productID != value) {
                        this._productID = value;
                        this.setEquality(BusinessObjects.PurchasesDetailsRow.Fields.ProductId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ProductPurchasesDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductPurchasesDetailsGrid);
            return ProductPurchasesDetailsGrid;
        }(BusinessObjects.PurchasesDetailsGrid));
        BusinessObjects.ProductPurchasesDetailsGrid = ProductPurchasesDetailsGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PickSalesOrderDialog = (function (_super) {
            __extends(PickSalesOrderDialog, _super);
            function PickSalesOrderDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.PickSalesOrderForm(this.idPrefix);
                this.form.ProductId.changeSelect2(function (e) {
                    _this.form.UnitPrice.value = null;
                    _this.form.Amount.value = null;
                });
                this.form.UomAndPriceId.changeSelect2(function (e) {
                    var uomAndPriceId = Q.toId(_this.form.UomAndPriceId.value);
                    if (uomAndPriceId != null) {
                        _this.form.UnitPrice.value = BusinessObjects.SalesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                        _this.calculateAmount();
                    }
                });
                this.form.Quantity.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.UnitPrice.change(function (e) {
                    _this.calculateAmount();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateAmount();
                });
            } //Ends the constructor 
            PickSalesOrderDialog.prototype.getFormKey = function () { return BusinessObjects.PickSalesOrderForm.formKey; };
            PickSalesOrderDialog.prototype.getIdProperty = function () { return BusinessObjects.PickSalesOrderRow.idProperty; };
            PickSalesOrderDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PickSalesOrderRow.localTextPrefix; };
            PickSalesOrderDialog.prototype.getService = function () { return BusinessObjects.PickSalesOrderService.baseUrl; };
            PickSalesOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SalesId.value = BusinessObjects.GlobalScripts.salesId;
            };
            PickSalesOrderDialog.prototype.calculateAmount = function () {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                var unitPrice = this.form.UnitPrice.value;
                if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                    if (discount != undefined && discount != 0) {
                        var amount1 = (unitPrice * quantity);
                        var amount2 = (unitPrice * quantity) * (discount / 100);
                        this.form.Amount.value = amount1 - amount2;
                    }
                    else
                        this.form.Amount.value = unitPrice * quantity;
                }
            }; //Ends the calculateAmount
            PickSalesOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PickSalesOrderDialog);
            return PickSalesOrderDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.PickSalesOrderDialog = PickSalesOrderDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PickSalesOrderEditor = (function (_super) {
            __extends(PickSalesOrderEditor, _super);
            function PickSalesOrderEditor(container) {
                _super.call(this, container);
            }
            PickSalesOrderEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.PickSalesOrder'; };
            PickSalesOrderEditor.prototype.getDialogType = function () { return BusinessObjects.PickSalesOrderEditorDialog; };
            PickSalesOrderEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.PickSalesOrderRow.localTextPrefix; };
            PickSalesOrderEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PickSalesOrderEditor);
            return PickSalesOrderEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.PickSalesOrderEditor = PickSalesOrderEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PickSalesOrderEditorDialog = (function (_super) {
            __extends(PickSalesOrderEditorDialog, _super);
            function PickSalesOrderEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.PickSalesOrderForm(this.idPrefix);
            }
            PickSalesOrderEditorDialog.prototype.getFormKey = function () { return BusinessObjects.PickSalesOrderForm.formKey; };
            PickSalesOrderEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PickSalesOrderRow.localTextPrefix; };
            PickSalesOrderEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PickSalesOrderEditorDialog);
            return PickSalesOrderEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.PickSalesOrderEditorDialog = PickSalesOrderEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PickSalesOrderGrid = (function (_super) {
            __extends(PickSalesOrderGrid, _super);
            function PickSalesOrderGrid(container) {
                _super.call(this, container);
            }
            PickSalesOrderGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.PickSalesOrder'; };
            PickSalesOrderGrid.prototype.getDialogType = function () { return BusinessObjects.PickSalesOrderDialog; };
            PickSalesOrderGrid.prototype.getIdProperty = function () { return BusinessObjects.PickSalesOrderRow.idProperty; };
            PickSalesOrderGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PickSalesOrderRow.localTextPrefix; };
            PickSalesOrderGrid.prototype.getService = function () { return BusinessObjects.PickSalesOrderService.baseUrl; };
            PickSalesOrderGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PickSalesOrderGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PickSalesOrderGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.salesID;
            };
            Object.defineProperty(PickSalesOrderGrid.prototype, "salesID", {
                get: function () {
                    return this._salesId;
                },
                set: function (value) {
                    if (this._salesId != value) {
                        this._salesId = value;
                        this.setEquality(InventoryManagement.BusinessObjects.SalesDetailsRow.Fields.SalesId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            PickSalesOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PickSalesOrderGrid);
            return PickSalesOrderGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.PickSalesOrderGrid = PickSalesOrderGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NotesDialog = (function (_super) {
            __extends(NotesDialog, _super);
            function NotesDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.NotesForm(this.idPrefix);
            }
            NotesDialog.prototype.getFormKey = function () { return BusinessObjects.NotesForm.formKey; };
            NotesDialog.prototype.getIdProperty = function () { return BusinessObjects.NotesRow.idProperty; };
            NotesDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.NotesRow.localTextPrefix; };
            NotesDialog.prototype.getNameProperty = function () { return BusinessObjects.NotesRow.nameProperty; };
            NotesDialog.prototype.getService = function () { return BusinessObjects.NotesService.baseUrl; };
            NotesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], NotesDialog);
            return NotesDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.NotesDialog = NotesDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(container) {
                _super.call(this, container);
            }
            NotesEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Notes'; };
            NotesEditor.prototype.getDialogType = function () { return BusinessObjects.NotesEditorDialog; };
            NotesEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.NotesRow.localTextPrefix; };
            NotesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], NotesEditor);
            return NotesEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.NotesEditor = NotesEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NotesEditorDialog = (function (_super) {
            __extends(NotesEditorDialog, _super);
            function NotesEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.NotesForm(this.idPrefix);
            }
            NotesEditorDialog.prototype.getFormKey = function () { return BusinessObjects.NotesForm.formKey; };
            NotesEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.NotesRow.localTextPrefix; };
            NotesEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.NotesRow.nameProperty; };
            NotesEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], NotesEditorDialog);
            return NotesEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.NotesEditorDialog = NotesEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NotesGrid = (function (_super) {
            __extends(NotesGrid, _super);
            function NotesGrid(container) {
                _super.call(this, container);
            }
            NotesGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Notes'; };
            NotesGrid.prototype.getDialogType = function () { return BusinessObjects.NotesDialog; };
            NotesGrid.prototype.getIdProperty = function () { return BusinessObjects.NotesRow.idProperty; };
            NotesGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.NotesRow.localTextPrefix; };
            NotesGrid.prototype.getService = function () { return BusinessObjects.NotesService.baseUrl; };
            NotesGrid.prototype.addButtonClick = function () {
                this.editItem({ PurchaseId: this.purchasesID });
            };
            NotesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            NotesGrid.prototype.getGridCanLoad = function () {
                return this._purchasesId != null;
            };
            Object.defineProperty(NotesGrid.prototype, "purchasesID", {
                get: function () {
                    return this._purchasesId;
                },
                set: function (value) {
                    if (this._purchasesId != value) {
                        this._purchasesId = value;
                        this.setEquality(BusinessObjects.NotesRow.Fields.PurchaseId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            NotesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NotesGrid);
            return NotesGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.NotesGrid = NotesGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var MovementHistoryDialog = (function (_super) {
            __extends(MovementHistoryDialog, _super);
            function MovementHistoryDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.MovementHistoryForm(this.idPrefix);
            }
            MovementHistoryDialog.prototype.getFormKey = function () { return BusinessObjects.MovementHistoryForm.formKey; };
            MovementHistoryDialog.prototype.getIdProperty = function () { return BusinessObjects.MovementHistoryRow.idProperty; };
            MovementHistoryDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.MovementHistoryRow.localTextPrefix; };
            MovementHistoryDialog.prototype.getNameProperty = function () { return BusinessObjects.MovementHistoryRow.nameProperty; };
            MovementHistoryDialog.prototype.getService = function () { return BusinessObjects.MovementHistoryService.baseUrl; };
            MovementHistoryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MovementHistoryDialog);
            return MovementHistoryDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.MovementHistoryDialog = MovementHistoryDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var MovementHistoryGrid = (function (_super) {
            __extends(MovementHistoryGrid, _super);
            function MovementHistoryGrid(container) {
                _super.call(this, container);
            }
            MovementHistoryGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.MovementHistory'; };
            MovementHistoryGrid.prototype.getDialogType = function () { return BusinessObjects.MovementHistoryDialog; };
            MovementHistoryGrid.prototype.getIdProperty = function () { return BusinessObjects.MovementHistoryRow.idProperty; };
            MovementHistoryGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.MovementHistoryRow.localTextPrefix; };
            MovementHistoryGrid.prototype.getService = function () { return BusinessObjects.MovementHistoryService.baseUrl; };
            MovementHistoryGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                return btns;
            };
            MovementHistoryGrid.prototype.getInitialTitle = function () {
                return null;
            };
            MovementHistoryGrid.prototype.getGridCanLoad = function () {
                return this.productID != null;
            };
            Object.defineProperty(MovementHistoryGrid.prototype, "productID", {
                get: function () {
                    return this._productID;
                },
                set: function (value) {
                    if (this._productID != value) {
                        this._productID = value;
                        this.setEquality(BusinessObjects.MovementHistoryRow.Fields.ProductId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            MovementHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovementHistoryGrid);
            return MovementHistoryGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.MovementHistoryGrid = MovementHistoryGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var GlobalScripts = (function () {
            function GlobalScripts() {
            }
            return GlobalScripts;
        }());
        BusinessObjects.GlobalScripts = GlobalScripts;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerLocationDialog = (function (_super) {
            __extends(CustomerLocationDialog, _super);
            function CustomerLocationDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.CustomerLocationForm(this.idPrefix);
            }
            CustomerLocationDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerLocationForm.formKey; };
            CustomerLocationDialog.prototype.getIdProperty = function () { return BusinessObjects.CustomerLocationRow.idProperty; };
            CustomerLocationDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerLocationRow.localTextPrefix; };
            CustomerLocationDialog.prototype.getService = function () { return BusinessObjects.CustomerLocationService.baseUrl; };
            CustomerLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerLocationDialog);
            return CustomerLocationDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.CustomerLocationDialog = CustomerLocationDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerLocationEditor = (function (_super) {
            __extends(CustomerLocationEditor, _super);
            function CustomerLocationEditor(container) {
                _super.call(this, container);
            }
            CustomerLocationEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.CustomerLocation'; };
            CustomerLocationEditor.prototype.getDialogType = function () { return BusinessObjects.CustomerLocationEditorDialog; };
            CustomerLocationEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerLocationRow.localTextPrefix; };
            CustomerLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerLocationEditor);
            return CustomerLocationEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.CustomerLocationEditor = CustomerLocationEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerLocationEditorDialog = (function (_super) {
            __extends(CustomerLocationEditorDialog, _super);
            function CustomerLocationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.CustomerLocationForm(this.idPrefix);
            }
            CustomerLocationEditorDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerLocationForm.formKey; };
            CustomerLocationEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerLocationRow.localTextPrefix; };
            CustomerLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerLocationEditorDialog);
            return CustomerLocationEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.CustomerLocationEditorDialog = CustomerLocationEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerLocationGrid = (function (_super) {
            __extends(CustomerLocationGrid, _super);
            function CustomerLocationGrid(container) {
                _super.call(this, container);
            }
            CustomerLocationGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.CustomerLocation'; };
            CustomerLocationGrid.prototype.getDialogType = function () { return BusinessObjects.CustomerLocationDialog; };
            CustomerLocationGrid.prototype.getIdProperty = function () { return BusinessObjects.CustomerLocationRow.idProperty; };
            CustomerLocationGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerLocationRow.localTextPrefix; };
            CustomerLocationGrid.prototype.getService = function () { return BusinessObjects.CustomerLocationService.baseUrl; };
            CustomerLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerLocationGrid);
            return CustomerLocationGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.CustomerLocationGrid = CustomerLocationGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BusinessObjects.CustomerForm(this.idPrefix);
                this.customerSales = new BusinessObjects.CustomerSalesGrid(this.byId("SalesGrid"));
                this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
            }
            CustomerDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return BusinessObjects.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return BusinessObjects.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return BusinessObjects.CustomerService.baseUrl; };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.customerSales.customerID = entity.CustomerId;
                Serenity.TabsExtensions.setDisabled(this.tabs, "SalesRecords", this.isNewOrDeleted());
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.CustomerDialog = CustomerDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerEditor = (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(container) {
                _super.call(this, container);
            }
            CustomerEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Customer'; };
            CustomerEditor.prototype.getDialogType = function () { return BusinessObjects.CustomerEditorDialog; };
            CustomerEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerEditor);
            return CustomerEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.CustomerEditor = CustomerEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerEditorDialog = (function (_super) {
            __extends(CustomerEditorDialog, _super);
            function CustomerEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.CustomerForm(this.idPrefix);
            }
            CustomerEditorDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerForm.formKey; };
            CustomerEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            CustomerEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.CustomerRow.nameProperty; };
            CustomerEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerEditorDialog);
            return CustomerEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.CustomerEditorDialog = CustomerEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                _super.call(this, container);
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return BusinessObjects.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return BusinessObjects.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return BusinessObjects.CustomerService.baseUrl; };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.CustomerGrid = CustomerGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../Sales/SalesGrid.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSalesGrid = (function (_super) {
            __extends(CustomerSalesGrid, _super);
            //protected getDialogType(){ return SuppplierProductDialog; }
            function CustomerSalesGrid(container) {
                _super.call(this, container);
            }
            CustomerSalesGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerId: this.customerID });
            };
            CustomerSalesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerSalesGrid.prototype.getGridCanLoad = function () {
                //return this._customerID != null;
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerSalesGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID != value) {
                        this._customerID = value;
                        this.setEquality("CustomerId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerSalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerSalesGrid);
            return CustomerSalesGrid;
        }(BusinessObjects.SalesGrid));
        BusinessObjects.CustomerSalesGrid = CustomerSalesGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CostingInfoDialog = (function (_super) {
            __extends(CostingInfoDialog, _super);
            function CostingInfoDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.CostingInfoForm(this.idPrefix);
            }
            CostingInfoDialog.prototype.getFormKey = function () { return BusinessObjects.CostingInfoForm.formKey; };
            CostingInfoDialog.prototype.getIdProperty = function () { return BusinessObjects.CostingInfoRow.idProperty; };
            CostingInfoDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CostingInfoRow.localTextPrefix; };
            CostingInfoDialog.prototype.getService = function () { return BusinessObjects.CostingInfoService.baseUrl; };
            CostingInfoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CostingInfoDialog);
            return CostingInfoDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.CostingInfoDialog = CostingInfoDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CostingInfoEditor = (function (_super) {
            __extends(CostingInfoEditor, _super);
            function CostingInfoEditor(container) {
                _super.call(this, container);
            }
            CostingInfoEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.CostingInfo'; };
            CostingInfoEditor.prototype.getDialogType = function () { return BusinessObjects.CostingInfoEditorDialog; };
            CostingInfoEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.CostingInfoRow.localTextPrefix; };
            CostingInfoEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CostingInfoEditor);
            return CostingInfoEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.CostingInfoEditor = CostingInfoEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CostingInfoEditorDialog = (function (_super) {
            __extends(CostingInfoEditorDialog, _super);
            function CostingInfoEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.CostingInfoForm(this.idPrefix);
            }
            CostingInfoEditorDialog.prototype.getFormKey = function () { return BusinessObjects.CostingInfoForm.formKey; };
            CostingInfoEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CostingInfoRow.localTextPrefix; };
            CostingInfoEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CostingInfoEditorDialog);
            return CostingInfoEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.CostingInfoEditorDialog = CostingInfoEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CostingInfoGrid = (function (_super) {
            __extends(CostingInfoGrid, _super);
            function CostingInfoGrid(container) {
                _super.call(this, container);
            }
            CostingInfoGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.CostingInfo'; };
            CostingInfoGrid.prototype.getDialogType = function () { return BusinessObjects.CostingInfoDialog; };
            CostingInfoGrid.prototype.getIdProperty = function () { return BusinessObjects.CostingInfoRow.idProperty; };
            CostingInfoGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.CostingInfoRow.localTextPrefix; };
            CostingInfoGrid.prototype.getService = function () { return BusinessObjects.CostingInfoService.baseUrl; };
            CostingInfoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CostingInfoGrid);
            return CostingInfoGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.CostingInfoGrid = CostingInfoGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BillOfMaterialDialog = (function (_super) {
            __extends(BillOfMaterialDialog, _super);
            function BillOfMaterialDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.BillOfMaterialForm(this.idPrefix);
            }
            BillOfMaterialDialog.prototype.getFormKey = function () { return BusinessObjects.BillOfMaterialForm.formKey; };
            BillOfMaterialDialog.prototype.getIdProperty = function () { return BusinessObjects.BillOfMaterialRow.idProperty; };
            BillOfMaterialDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.BillOfMaterialRow.localTextPrefix; };
            BillOfMaterialDialog.prototype.getNameProperty = function () { return BusinessObjects.BillOfMaterialRow.nameProperty; };
            BillOfMaterialDialog.prototype.getService = function () { return BusinessObjects.BillOfMaterialService.baseUrl; };
            BillOfMaterialDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], BillOfMaterialDialog);
            return BillOfMaterialDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.BillOfMaterialDialog = BillOfMaterialDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BillOfMaterialGrid = (function (_super) {
            __extends(BillOfMaterialGrid, _super);
            function BillOfMaterialGrid(container) {
                _super.call(this, container);
            }
            BillOfMaterialGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.BillOfMaterial'; };
            BillOfMaterialGrid.prototype.getDialogType = function () { return BusinessObjects.BillOfMaterialDialog; };
            BillOfMaterialGrid.prototype.getIdProperty = function () { return BusinessObjects.BillOfMaterialRow.idProperty; };
            BillOfMaterialGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.BillOfMaterialRow.localTextPrefix; };
            BillOfMaterialGrid.prototype.getService = function () { return BusinessObjects.BillOfMaterialService.baseUrl; };
            BillOfMaterialGrid.prototype.addButtonClick = function () {
                this.editItem({ ProductId: this.productID });
            };
            BillOfMaterialGrid.prototype.getInitialTitle = function () {
                return null;
            };
            BillOfMaterialGrid.prototype.getGridCanLoad = function () {
                return this.productID != null;
            };
            Object.defineProperty(BillOfMaterialGrid.prototype, "productID", {
                get: function () {
                    return this._productID;
                },
                set: function (value) {
                    if (this._productID != value) {
                        this._productID = value;
                        this.setEquality(BusinessObjects.BillOfMaterialRow.Fields.ProductId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            BillOfMaterialGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BillOfMaterialGrid);
            return BillOfMaterialGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.BillOfMaterialGrid = BillOfMaterialGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankTransactionDialog = (function (_super) {
            __extends(BankTransactionDialog, _super);
            function BankTransactionDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.BankTransactionForm(this.idPrefix);
            }
            BankTransactionDialog.prototype.getFormKey = function () { return BusinessObjects.BankTransactionForm.formKey; };
            BankTransactionDialog.prototype.getIdProperty = function () { return BusinessObjects.BankTransactionRow.idProperty; };
            BankTransactionDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.BankTransactionRow.localTextPrefix; };
            BankTransactionDialog.prototype.getNameProperty = function () { return BusinessObjects.BankTransactionRow.nameProperty; };
            BankTransactionDialog.prototype.getService = function () { return BusinessObjects.BankTransactionService.baseUrl; };
            BankTransactionDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], BankTransactionDialog);
            return BankTransactionDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.BankTransactionDialog = BankTransactionDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankTransactionEditor = (function (_super) {
            __extends(BankTransactionEditor, _super);
            function BankTransactionEditor(container) {
                _super.call(this, container);
            }
            BankTransactionEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.BankTransaction'; };
            BankTransactionEditor.prototype.getDialogType = function () { return BusinessObjects.BankTransactionEditorDialog; };
            BankTransactionEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.BankTransactionRow.localTextPrefix; };
            BankTransactionEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], BankTransactionEditor);
            return BankTransactionEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.BankTransactionEditor = BankTransactionEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankTransactionEditorDialog = (function (_super) {
            __extends(BankTransactionEditorDialog, _super);
            function BankTransactionEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.BankTransactionForm(this.idPrefix);
            }
            BankTransactionEditorDialog.prototype.getFormKey = function () { return BusinessObjects.BankTransactionForm.formKey; };
            BankTransactionEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.BankTransactionRow.localTextPrefix; };
            BankTransactionEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.BankTransactionRow.nameProperty; };
            BankTransactionEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], BankTransactionEditorDialog);
            return BankTransactionEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.BankTransactionEditorDialog = BankTransactionEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankTransactionGrid = (function (_super) {
            __extends(BankTransactionGrid, _super);
            function BankTransactionGrid(container) {
                _super.call(this, container);
            }
            BankTransactionGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.BankTransaction'; };
            BankTransactionGrid.prototype.getDialogType = function () { return BusinessObjects.BankTransactionDialog; };
            BankTransactionGrid.prototype.getIdProperty = function () { return BusinessObjects.BankTransactionRow.idProperty; };
            BankTransactionGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.BankTransactionRow.localTextPrefix; };
            BankTransactionGrid.prototype.getService = function () { return BusinessObjects.BankTransactionService.baseUrl; };
            BankTransactionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BankTransactionGrid);
            return BankTransactionGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.BankTransactionGrid = BankTransactionGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankDialog = (function (_super) {
            __extends(BankDialog, _super);
            function BankDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.BankForm(this.idPrefix);
            }
            BankDialog.prototype.getFormKey = function () { return BusinessObjects.BankForm.formKey; };
            BankDialog.prototype.getIdProperty = function () { return BusinessObjects.BankRow.idProperty; };
            BankDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.BankRow.localTextPrefix; };
            BankDialog.prototype.getNameProperty = function () { return BusinessObjects.BankRow.nameProperty; };
            BankDialog.prototype.getService = function () { return BusinessObjects.BankService.baseUrl; };
            BankDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], BankDialog);
            return BankDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.BankDialog = BankDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankEditor = (function (_super) {
            __extends(BankEditor, _super);
            function BankEditor(container) {
                _super.call(this, container);
            }
            BankEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Bank'; };
            BankEditor.prototype.getDialogType = function () { return BusinessObjects.BankEditorDialog; };
            BankEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.BankRow.localTextPrefix; };
            BankEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], BankEditor);
            return BankEditor;
        }(InventoryManagement.Common.GridEditorBase));
        BusinessObjects.BankEditor = BankEditor;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankEditorDialog = (function (_super) {
            __extends(BankEditorDialog, _super);
            function BankEditorDialog() {
                _super.apply(this, arguments);
                this.form = new BusinessObjects.BankForm(this.idPrefix);
            }
            BankEditorDialog.prototype.getFormKey = function () { return BusinessObjects.BankForm.formKey; };
            BankEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.BankRow.localTextPrefix; };
            BankEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.BankRow.nameProperty; };
            BankEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], BankEditorDialog);
            return BankEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        BusinessObjects.BankEditorDialog = BankEditorDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BankGrid = (function (_super) {
            __extends(BankGrid, _super);
            function BankGrid(container) {
                _super.call(this, container);
            }
            BankGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Bank'; };
            BankGrid.prototype.getDialogType = function () { return BusinessObjects.BankDialog; };
            BankGrid.prototype.getIdProperty = function () { return BusinessObjects.BankRow.idProperty; };
            BankGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.BankRow.localTextPrefix; };
            BankGrid.prototype.getService = function () { return BusinessObjects.BankService.baseUrl; };
            BankGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BankGrid);
            return BankGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.BankGrid = BankGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var AdjustStockDialog = (function (_super) {
            __extends(AdjustStockDialog, _super);
            function AdjustStockDialog() {
                _super.call(this);
                this.form = new BusinessObjects.AdjustStockForm(this.idPrefix);
            }
            AdjustStockDialog.prototype.getFormKey = function () { return BusinessObjects.AdjustStockForm.formKey; };
            AdjustStockDialog.prototype.getIdProperty = function () { return BusinessObjects.StockRow.idProperty; };
            AdjustStockDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.StockRow.localTextPrefix; };
            AdjustStockDialog.prototype.getService = function () { return BusinessObjects.StockService.baseUrl; };
            AdjustStockDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.ActionKey.value = "AdjustStock";
            };
            AdjustStockDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AdjustStockDialog);
            return AdjustStockDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.AdjustStockDialog = AdjustStockDialog;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var AdjustStockGrid = (function (_super) {
            __extends(AdjustStockGrid, _super);
            function AdjustStockGrid(container) {
                _super.call(this, container);
            }
            AdjustStockGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.AdjustStock'; };
            AdjustStockGrid.prototype.getDialogType = function () { return BusinessObjects.AdjustStockDialog; };
            AdjustStockGrid.prototype.getIdProperty = function () { return BusinessObjects.StockRow.idProperty; };
            AdjustStockGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.StockRow.localTextPrefix; };
            AdjustStockGrid.prototype.getService = function () { return BusinessObjects.StockService.baseUrl; };
            AdjustStockGrid.prototype.getInitialTitle = function () {
                return "Adjust stock";
            };
            AdjustStockGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                return btns;
            };
            AdjustStockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AdjustStockGrid);
            return AdjustStockGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.AdjustStockGrid = AdjustStockGrid;
    })(BusinessObjects = InventoryManagement.BusinessObjects || (InventoryManagement.BusinessObjects = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                _super.call(this, div);
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                //var items = RoleRow.getLookup().items
                var items = Q.getLookup("Administration.RoleLookup").items;
                return items.map(function (role) { return {
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }; });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.RoleCheckEditor(this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = this;
                _super.call(this, container, opt);
                this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return {
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }; });
                this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                this.setItems(items);
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserLocationDialog = (function (_super) {
            __extends(UserLocationDialog, _super);
            function UserLocationDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.UserLocationForm(this.idPrefix);
            }
            UserLocationDialog.prototype.getFormKey = function () { return Administration.UserLocationForm.formKey; };
            UserLocationDialog.prototype.getIdProperty = function () { return Administration.UserLocationRow.idProperty; };
            UserLocationDialog.prototype.getLocalTextPrefix = function () { return Administration.UserLocationRow.localTextPrefix; };
            UserLocationDialog.prototype.getService = function () { return Administration.UserLocationService.baseUrl; };
            UserLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UserLocationDialog);
            return UserLocationDialog;
        }(Serenity.EntityDialog));
        Administration.UserLocationDialog = UserLocationDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserLocationEditor = (function (_super) {
            __extends(UserLocationEditor, _super);
            function UserLocationEditor(container) {
                _super.call(this, container);
            }
            UserLocationEditor.prototype.getColumnsKey = function () { return 'Administration.UserLocation'; };
            UserLocationEditor.prototype.getDialogType = function () { return Administration.UserLocationEditorDialog; };
            UserLocationEditor.prototype.getLocalTextPrefix = function () { return Administration.UserLocationRow.localTextPrefix; };
            UserLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], UserLocationEditor);
            return UserLocationEditor;
        }(InventoryManagement.Common.GridEditorBase));
        Administration.UserLocationEditor = UserLocationEditor;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserLocationEditorDialog = (function (_super) {
            __extends(UserLocationEditorDialog, _super);
            function UserLocationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.UserLocationForm(this.idPrefix);
            }
            UserLocationEditorDialog.prototype.getFormKey = function () { return Administration.UserLocationForm.formKey; };
            UserLocationEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.UserLocationRow.localTextPrefix; };
            UserLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UserLocationEditorDialog);
            return UserLocationEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        Administration.UserLocationEditorDialog = UserLocationEditorDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserLocationGrid = (function (_super) {
            __extends(UserLocationGrid, _super);
            function UserLocationGrid(container) {
                _super.call(this, container);
            }
            UserLocationGrid.prototype.getColumnsKey = function () { return 'Administration.UserLocation'; };
            UserLocationGrid.prototype.getDialogType = function () { return Administration.UserLocationDialog; };
            UserLocationGrid.prototype.getIdProperty = function () { return Administration.UserLocationRow.idProperty; };
            UserLocationGrid.prototype.getLocalTextPrefix = function () { return Administration.UserLocationRow.localTextPrefix; };
            UserLocationGrid.prototype.getService = function () { return Administration.UserLocationService.baseUrl; };
            UserLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserLocationGrid);
            return UserLocationGrid;
        }(Serenity.EntityGrid));
        Administration.UserLocationGrid = UserLocationGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Administration.UserForm(this.idPrefix);
                this.form.Password.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                this.form.PasswordConfirm.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                _super.call(this, container);
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                return btns;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = InventoryManagement.Authorization || (InventoryManagement.Authorization = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleLocationDialog = (function (_super) {
            __extends(RoleLocationDialog, _super);
            function RoleLocationDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.RoleLocationForm(this.idPrefix);
            }
            RoleLocationDialog.prototype.getFormKey = function () { return Administration.RoleLocationForm.formKey; };
            RoleLocationDialog.prototype.getIdProperty = function () { return Administration.RoleLocationRow.idProperty; };
            RoleLocationDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleLocationRow.localTextPrefix; };
            RoleLocationDialog.prototype.getService = function () { return Administration.RoleLocationService.baseUrl; };
            RoleLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RoleLocationDialog);
            return RoleLocationDialog;
        }(Serenity.EntityDialog));
        Administration.RoleLocationDialog = RoleLocationDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleLocationEditor = (function (_super) {
            __extends(RoleLocationEditor, _super);
            function RoleLocationEditor(container) {
                _super.call(this, container);
            }
            RoleLocationEditor.prototype.getColumnsKey = function () { return 'Administration.RoleLocation'; };
            RoleLocationEditor.prototype.getDialogType = function () { return Administration.RoleLocationEditorDialog; };
            RoleLocationEditor.prototype.getLocalTextPrefix = function () { return Administration.RoleLocationRow.localTextPrefix; };
            RoleLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleLocationEditor);
            return RoleLocationEditor;
        }(InventoryManagement.Common.GridEditorBase));
        Administration.RoleLocationEditor = RoleLocationEditor;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleLocationEditorDialog = (function (_super) {
            __extends(RoleLocationEditorDialog, _super);
            function RoleLocationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.RoleLocationForm(this.idPrefix);
            }
            RoleLocationEditorDialog.prototype.getFormKey = function () { return Administration.RoleLocationForm.formKey; };
            RoleLocationEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleLocationRow.localTextPrefix; };
            RoleLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RoleLocationEditorDialog);
            return RoleLocationEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        Administration.RoleLocationEditorDialog = RoleLocationEditorDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleLocationGrid = (function (_super) {
            __extends(RoleLocationGrid, _super);
            function RoleLocationGrid(container) {
                _super.call(this, container);
            }
            RoleLocationGrid.prototype.getColumnsKey = function () { return 'Administration.RoleLocation'; };
            RoleLocationGrid.prototype.getDialogType = function () { return Administration.RoleLocationDialog; };
            RoleLocationGrid.prototype.getIdProperty = function () { return Administration.RoleLocationRow.idProperty; };
            RoleLocationGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleLocationRow.localTextPrefix; };
            RoleLocationGrid.prototype.getService = function () { return Administration.RoleLocationService.baseUrl; };
            RoleLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleLocationGrid);
            return RoleLocationGrid;
        }(Serenity.EntityGrid));
        Administration.RoleLocationGrid = RoleLocationGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.RoleForm(this.idPrefix);
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                _super.call(this, container);
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                return btns;
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LocationDialog = (function (_super) {
            __extends(LocationDialog, _super);
            function LocationDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.LocationForm(this.idPrefix);
            }
            LocationDialog.prototype.getFormKey = function () { return Administration.LocationForm.formKey; };
            LocationDialog.prototype.getIdProperty = function () { return Administration.LocationRow.idProperty; };
            LocationDialog.prototype.getLocalTextPrefix = function () { return Administration.LocationRow.localTextPrefix; };
            LocationDialog.prototype.getNameProperty = function () { return Administration.LocationRow.nameProperty; };
            LocationDialog.prototype.getService = function () { return Administration.LocationService.baseUrl; };
            LocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], LocationDialog);
            return LocationDialog;
        }(Serenity.EntityDialog));
        Administration.LocationDialog = LocationDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LocationEditor = (function (_super) {
            __extends(LocationEditor, _super);
            function LocationEditor(container) {
                _super.call(this, container);
            }
            LocationEditor.prototype.getColumnsKey = function () { return 'Administration.Location'; };
            LocationEditor.prototype.getDialogType = function () { return Administration.LocationEditorDialog; };
            LocationEditor.prototype.getLocalTextPrefix = function () { return Administration.LocationRow.localTextPrefix; };
            LocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationEditor);
            return LocationEditor;
        }(InventoryManagement.Common.GridEditorBase));
        Administration.LocationEditor = LocationEditor;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LocationEditorDialog = (function (_super) {
            __extends(LocationEditorDialog, _super);
            function LocationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.LocationForm(this.idPrefix);
            }
            LocationEditorDialog.prototype.getFormKey = function () { return Administration.LocationForm.formKey; };
            LocationEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.LocationRow.localTextPrefix; };
            LocationEditorDialog.prototype.getNameProperty = function () { return Administration.LocationRow.nameProperty; };
            LocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], LocationEditorDialog);
            return LocationEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        Administration.LocationEditorDialog = LocationEditorDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LocationGrid = (function (_super) {
            __extends(LocationGrid, _super);
            function LocationGrid(container) {
                _super.call(this, container);
            }
            LocationGrid.prototype.getColumnsKey = function () { return 'Administration.Location'; };
            LocationGrid.prototype.getDialogType = function () { return Administration.LocationDialog; };
            LocationGrid.prototype.getIdProperty = function () { return Administration.LocationRow.idProperty; };
            LocationGrid.prototype.getLocalTextPrefix = function () { return Administration.LocationRow.localTextPrefix; };
            LocationGrid.prototype.getService = function () { return Administration.LocationService.baseUrl; };
            LocationGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                return btns;
            };
            LocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationGrid);
            return LocationGrid;
        }(Serenity.EntityGrid));
        Administration.LocationGrid = LocationGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LocationListFormatter = (function () {
            function LocationListFormatter() {
            }
            LocationListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length) {
                    if (ctx.value) {
                        return Q.htmlEncode(Administration.LocationRow.getLookup().itemById[ctx.value].LocationName);
                    }
                    else
                        return "";
                }
                var byId = Administration.LocationRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.LocationName);
                }).join(", ");
            };
            LocationListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], LocationListFormatter);
            return LocationListFormatter;
        }());
        Administration.LocationListFormatter = LocationListFormatter;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.LanguageForm(this.idPrefix);
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                _super.call(this, container);
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var GetCodeDialog = (function (_super) {
            __extends(GetCodeDialog, _super);
            function GetCodeDialog() {
                _super.call(this);
                this.form = new Administration.GetCodeForm(this.idPrefix);
                this.set_dialogTitle("Get code (" + "this.form.LocationLocationName" + ")");
                this.dialogTitle = "";
            }
            GetCodeDialog.prototype.getFormKey = function () { return Administration.GetCodeForm.formKey; };
            GetCodeDialog.prototype.getIdProperty = function () { return Administration.GetCodeRow.idProperty; };
            GetCodeDialog.prototype.getLocalTextPrefix = function () { return Administration.GetCodeRow.localTextPrefix; };
            GetCodeDialog.prototype.getNameProperty = function () { return Administration.GetCodeRow.nameProperty; };
            GetCodeDialog.prototype.getService = function () { return Administration.GetCodeService.baseUrl; };
            GetCodeDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            GetCodeDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadonly(this.form.LocationId.element, true);
                this.deleteButton.hide();
            };
            GetCodeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], GetCodeDialog);
            return GetCodeDialog;
        }(Serenity.EntityDialog));
        Administration.GetCodeDialog = GetCodeDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var GetCodeEditor = (function (_super) {
            __extends(GetCodeEditor, _super);
            function GetCodeEditor(container) {
                _super.call(this, container);
            }
            GetCodeEditor.prototype.getColumnsKey = function () { return 'Administration.GetCode'; };
            GetCodeEditor.prototype.getDialogType = function () { return Administration.GetCodeEditorDialog; };
            GetCodeEditor.prototype.getLocalTextPrefix = function () { return Administration.GetCodeRow.localTextPrefix; };
            GetCodeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], GetCodeEditor);
            return GetCodeEditor;
        }(InventoryManagement.Common.GridEditorBase));
        Administration.GetCodeEditor = GetCodeEditor;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var GetCodeEditorDialog = (function (_super) {
            __extends(GetCodeEditorDialog, _super);
            function GetCodeEditorDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.GetCodeForm(this.idPrefix);
            }
            GetCodeEditorDialog.prototype.getFormKey = function () { return Administration.GetCodeForm.formKey; };
            GetCodeEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.GetCodeRow.localTextPrefix; };
            GetCodeEditorDialog.prototype.getNameProperty = function () { return Administration.GetCodeRow.nameProperty; };
            GetCodeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], GetCodeEditorDialog);
            return GetCodeEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        Administration.GetCodeEditorDialog = GetCodeEditorDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var GetCodeGrid = (function (_super) {
            __extends(GetCodeGrid, _super);
            function GetCodeGrid(container) {
                _super.call(this, container);
            }
            GetCodeGrid.prototype.getColumnsKey = function () { return 'Administration.GetCode'; };
            GetCodeGrid.prototype.getDialogType = function () { return Administration.GetCodeDialog; };
            GetCodeGrid.prototype.getIdProperty = function () { return Administration.GetCodeRow.idProperty; };
            GetCodeGrid.prototype.getLocalTextPrefix = function () { return Administration.GetCodeRow.localTextPrefix; };
            GetCodeGrid.prototype.getService = function () { return Administration.GetCodeService.baseUrl; };
            GetCodeGrid.prototype.getButtons = function () {
                return null;
            };
            GetCodeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GetCodeGrid);
            return GetCodeGrid;
        }(Serenity.EntityGrid));
        Administration.GetCodeGrid = GetCodeGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var AccountDialog = (function (_super) {
            __extends(AccountDialog, _super);
            function AccountDialog() {
                _super.call(this);
                this.form = new Administration.AccountForm(this.idPrefix);
                this.element.addClass('flex-layout');
            }
            AccountDialog.prototype.getFormKey = function () { return Administration.AccountForm.formKey; };
            AccountDialog.prototype.getIdProperty = function () { return Administration.AccountRow.idProperty; };
            AccountDialog.prototype.getLocalTextPrefix = function () { return Administration.AccountRow.localTextPrefix; };
            AccountDialog.prototype.getNameProperty = function () { return Administration.AccountRow.nameProperty; };
            AccountDialog.prototype.getService = function () { return Administration.AccountService.baseUrl; };
            AccountDialog = __decorate([
                Serenity.Decorators.panel()
            ], AccountDialog);
            return AccountDialog;
        }(Serenity.EntityDialog));
        Administration.AccountDialog = AccountDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var AccountEditor = (function (_super) {
            __extends(AccountEditor, _super);
            function AccountEditor(container) {
                _super.call(this, container);
            }
            AccountEditor.prototype.getColumnsKey = function () { return 'Administration.Account'; };
            AccountEditor.prototype.getDialogType = function () { return Administration.AccountEditorDialog; };
            AccountEditor.prototype.getLocalTextPrefix = function () { return Administration.AccountRow.localTextPrefix; };
            AccountEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountEditor);
            return AccountEditor;
        }(InventoryManagement.Common.GridEditorBase));
        Administration.AccountEditor = AccountEditor;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var AccountEditorDialog = (function (_super) {
            __extends(AccountEditorDialog, _super);
            function AccountEditorDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.AccountForm(this.idPrefix);
            }
            AccountEditorDialog.prototype.getFormKey = function () { return Administration.AccountForm.formKey; };
            AccountEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.AccountRow.localTextPrefix; };
            AccountEditorDialog.prototype.getNameProperty = function () { return Administration.AccountRow.nameProperty; };
            AccountEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AccountEditorDialog);
            return AccountEditorDialog;
        }(InventoryManagement.Common.GridEditorDialog));
        Administration.AccountEditorDialog = AccountEditorDialog;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
var InventoryManagement;
(function (InventoryManagement) {
    var Administration;
    (function (Administration) {
        var AccountGrid = (function (_super) {
            __extends(AccountGrid, _super);
            function AccountGrid(container) {
                _super.call(this, container);
            }
            AccountGrid.prototype.getColumnsKey = function () { return 'Administration.Account'; };
            AccountGrid.prototype.getDialogType = function () { return Administration.AccountDialog; };
            AccountGrid.prototype.getIdProperty = function () { return Administration.AccountRow.idProperty; };
            AccountGrid.prototype.getLocalTextPrefix = function () { return Administration.AccountRow.localTextPrefix; };
            AccountGrid.prototype.getService = function () { return Administration.AccountService.baseUrl; };
            AccountGrid.prototype.getButtons = function () {
                return null;
            };
            AccountGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountGrid);
            return AccountGrid;
        }(Serenity.EntityGrid));
        Administration.AccountGrid = AccountGrid;
    })(Administration = InventoryManagement.Administration || (InventoryManagement.Administration = {}));
})(InventoryManagement || (InventoryManagement = {}));
//# sourceMappingURL=InventoryManagement.Web.js.map