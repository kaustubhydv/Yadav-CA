import { Component } from '@angular/core';
import { UpcomingEventsService } from '../../services/upcoming-events-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  imports: [CommonModule],
  templateUrl: './upcoming-events.html',
  styleUrl: './upcoming-events.css',
})
export class UpcomingEvents {
  events: any[] = [];
  isLoading: boolean = true;
  constructor(
    private upcomingEventsService: UpcomingEventsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.upcomingEventsService.getEvents().subscribe((data) => {
      console.log(data);

      this.events = data;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
}
