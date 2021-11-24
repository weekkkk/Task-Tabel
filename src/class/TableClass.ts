import RowType from "@/types/RowType"

export default class TableClass {
  rows: RowType[];
  constructor(rows: RowType[]) {
    this.rows = rows;
  }
  createRow(row: RowType){
    this.rows.push(row);
  }
}