import RowType from "@/types/RowType"

export default class TableClass {
  rows: RowType[];
  constructor(rows: RowType[]) {
    this.rows = rows;
  }
  addRow(row: RowType){
    this.rows.push(row);
  }
}