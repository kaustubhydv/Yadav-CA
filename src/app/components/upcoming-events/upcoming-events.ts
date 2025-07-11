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
  modalOpen = false;
  modalImageUrl: string | null = null;

  constructor(
    private upcomingEventsService: UpcomingEventsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.upcomingEventsService.getEvents().subscribe((data) => {
      this.events = data;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  openImageModal(url: string) {
    this.modalImageUrl = url;
    this.modalOpen = true;
  }

  closeImageModal() {
    this.modalOpen = false;
    this.modalImageUrl = null;
  }
}
