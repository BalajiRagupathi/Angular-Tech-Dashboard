import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TechData } from '../shared/tech_data.model';
import { TechDataService } from '../shared/tech_data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [TechDataService],
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'total_users',
    'usage_count',
    'usage_points',
    'popularity',
  ]; // Table Columns Names

  dataSource: MatTableDataSource<TechData>; //API Data storage

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  status = false;   //Loading Status

  constructor(private tech_data: TechDataService) {
    this.status = false;
    this.tech_data.getResponse().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data['list']);
      this.status = true;
    }); // Assign the data to the data source for the table to render
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //Filter Method
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
