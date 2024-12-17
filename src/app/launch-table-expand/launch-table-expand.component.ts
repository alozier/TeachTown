import { Component, OnInit, ViewChild} from '@angular/core';
import { LaunchTableExpandService } from './launch-table-expand.service';
import { Launch } from './launch';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common'
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-launch-table-expanded',
  imports: [CommonModule, MatPaginator, MatSort, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './launch-table-expand.component.html',
  styleUrl: './launch-table-expand.component.scss'
})
export class LaunchTableExpandComponent {
  
  // loads the data source to include Launch data pulled from API
  dataSource = new MatTableDataSource<Launch>();

  // sets column names, must be exact same as in the Launch model
  displayedColumns = ['flight_number', 'launch_year', 'rocket_name', 'details'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  launchLinks: Launch | null;
  
  // Angular Materials MatSort and MatPaginator for use
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private launchTableExpandService: LaunchTableExpandService) {}

  ngOnInit() {
    this.loadLaunches();  // loads the data from API call using the LaunchService
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort; // add sort capabilty
    this.dataSource.paginator = this.paginator; // add paginator
  }

  // function that implements LaunchService to pull API data for all launches
  loadLaunches() {
    return this.launchTableExpandService.getLaunches().subscribe(data => {
      this.dataSource.data = data as Launch[];
    });
  }
}