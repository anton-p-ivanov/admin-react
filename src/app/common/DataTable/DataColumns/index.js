import DataColumnText from "./DataColumnText";
import DataColumnEmail from "./DataColumnEmail";
import DataColumnDatetime from "./DataColumnDatetime";
import { DataColumn as BooleanColumn } from "./DataColumnBoolean";
import { DataColumn as CheckboxColumn } from "./DataColumnCheckbox";
import { DataColumn as ActionColumn } from "./DataColumnAction";
import { DataColumn as LinkColumn } from "./DataColumnLink";

export default {
    "text": DataColumnText,
    "email": DataColumnEmail,
    "datetime": DataColumnDatetime,
    "boolean": BooleanColumn,
    "selector": CheckboxColumn,
    "action": ActionColumn,
    "link": LinkColumn
}