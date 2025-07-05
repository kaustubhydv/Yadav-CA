import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

@Component({
  selector: 'app-event-gallery',
  imports: [CommonModule],
  templateUrl: './event-gallery.html',
  styleUrl: './event-gallery.css',
  standalone: true,
})
export class EventGallery {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  allPhotos: string[] = [
    'assets/gallery1.jpg',
    'assets/gallery2.jpg',
    'assets/gallery3.jpg',
    'assets/gallery4.jpg',
    'assets/gallery5.jpg',
    'assets/gallery6.jpg',
    'assets/gallery7.jpg',
    'assets/gallery8.jpg',
    'assets/gallery9.jpg',
  ];

  featuredImages: string[] = [
    'assets/feature1.jpg',
    'assets/feature2.jpg',
    'assets/feature3.jpg',
  ];

  page: number = 1;
  imagesPerPage = 6;
  modalImage: string | null = null;

  get totalPages() {
    return Math.ceil(this.allPhotos.length / this.imagesPerPage);
  }

  get currentPhotos() {
    const start = (this.page - 1) * this.imagesPerPage;
    return this.allPhotos.slice(start, start + this.imagesPerPage);
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  openModal(img: string) {
    this.modalImage = img;
  }

  closeModal() {
    this.modalImage = null;
  }

  ngAfterViewInit(): void {
    new Swiper('.mySwiper', {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
    });
  }
}
