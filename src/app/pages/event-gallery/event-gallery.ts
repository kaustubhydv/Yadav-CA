import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { ModalMembership } from '../../components/modal-membership/modal-membership';
import { imgData } from '../home/home';
import { ActivatedRoute } from '@angular/router';
import { UpcomingEvents } from '../../components/upcoming-events/upcoming-events';
import { Navbar } from '../../components/navbar/navbar';

Swiper.use([Navigation]);

@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.html',
  styleUrls: ['./event-gallery.css'],
  imports: [CommonModule, ModalMembership, UpcomingEvents, Navbar],
  standalone: true,
})
export class EventGallery implements OnInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  imgData = imgData;
  selectedTab: string = '';
  selectedImages: string[] = [];
  modalOpen = false;
  showModal = false;
  page: number = 1;
  imagesPerPage: number = 9;

  swiperInstance: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const eventParam = (params['event'] || '').toLowerCase().trim();
      const found = this.imgData.find(
        (tab) => tab.title.toLowerCase().trim() === eventParam
      );

      if (found) {
        this.selectedTab = found.title;
        this.selectedImages = [...found.images];
      } else {
        // Default to first tab if not found
        const first = this.imgData[0];
        this.selectedTab = first.title;
        this.selectedImages = [...first.images];
      }
    });
  }

  selectTab(title: string): void {
    this.page = 1;
    this.selectedTab = title;
    this.selectedImages =
      this.imgData.find((tab) => tab.title === title)?.images || [];
  }

  openFullscreen(index: number): void {
    this.modalOpen = true;

    setTimeout(() => {
      this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
        modules: [Navigation],
        slidesPerView: 1,
        loop: true,
        spaceBetween: 10,
        initialSlide: index,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      document.addEventListener('keydown', this.handleKeyPress);
    });
  }

  closeFullscreen(): void {
    this.modalOpen = false;

    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }

    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    if (!this.swiperInstance) return;

    if (event.key === 'ArrowRight') {
      this.swiperInstance.slideNext();
    } else if (event.key === 'ArrowLeft') {
      this.swiperInstance.slidePrev();
    }
  };

  modalClick() {
    this.showModal = true;
  }

  modalStatus(status: boolean) {
    this.showModal = status;
  }

  get paginatedImages() {
    const start = (this.page - 1) * this.imagesPerPage;
    return this.selectedImages.slice(start, start + this.imagesPerPage);
  }

  get totalPages() {
    return Math.ceil(this.selectedImages.length / this.imagesPerPage);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.scrollToGallery();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.scrollToGallery();
    }
  }

  scrollToGallery() {
    const galleryElement = document.getElementById('event-gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
