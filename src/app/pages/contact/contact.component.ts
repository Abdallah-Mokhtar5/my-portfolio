import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  activeFaq: number | null = null;

  toggleFaq(faqNumber: number) {
    this.activeFaq = this.activeFaq === faqNumber ? null : faqNumber;
  }

  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission
      console.log('Form submitted:', form.value);
      // Add your form handling logic here
    }
  }
}
