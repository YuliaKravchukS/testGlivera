"use strict";

import { blogs, clients, services } from "./scr/const/const.js";

const listServices = document.querySelector(".list-services");
const listWhatDo = document.querySelector(".list-whatDo");
const listTestimonials = document.querySelector(".list-testimonials");
const listBlog = document.querySelector(".list-blog");

const servicesTemplate = () => {
  return services
    .map(
      (service) => `
        <li>
            <svg class='icon-services' >
            <use href="${service.icon}" fill='aqua'/>
          </svg>
         <div class='list-services-wrap'>
              <h3>${service.tittle}</h3>
              <p>${service.text}</p>
         </div>
        </li>`
    )
    .join("");
};

const listWhatDoTemplate = () => {
  if (services.length > 0) {
    return services
      .slice(0, 6)
      .map(
        (service) => `
        <li>
          <svg  width="20" height="20">
            <use class="icon" href="${service.icon2 || service.icon}"/>
          </svg>
            <p class="text-whatDo" >${service.tittle}</p>
        </li>`
      )
      .join("");
  }
};

const listTestimonialsTemplate = () => {
  return clients
    .map(
      (client) => `
        <li>
            <div class="testimonials-wrap-img">
            <img class="testimonials-img" src="${client.img}" alt="${client.name}" />
            </div>
          <div class="testimonials-wrap-text">
           <div>
              <p  class="testimonials-name">${client.name}</p>
              <p  class="testimonials-position">${client.position}</p>
           </div>
            <p  class="testimonials-text">${client.text}</p>
          </div>
        </li>`
    )
    .join("");
};
const listBlogTemplate = () => {
  return blogs
    .map(
      (blog) => `
      <li>
            <div class="blog">
              <div class="blog-wrap-img">
                <img class="blog-img" src="${blog.img}" alt="" />
                <div class="blog-date">
                  <p class="blog-day">${blog.day}</p>
                  <p class="blog-month">${blog.month}</p>
                </div>
              </div>
              <a href="/">Lorem ipsum dolor</a>
              <p class="blog-text">
                Vestibulum at lorem in mi faucibus efficitur non et arcu. Nullam
                cursus rhoncus massa, aliquam semper libero facilisis sagittis.
                Ut interdum scelerisque sollicitudin.
              </p>
        <div class="blog-statistic">
                <div >
                <svg  width="20" height="20">

             <use href="./scr/icons/icons.svg#icon-eye" fill="aqua" />
            </svg>
            <p>123</p>
            </div>
                  <div>
              <svg  width="15" height="15">
             <use href="./scr/icons/icons.svg#icon-comments" fill="aqua" />
          </svg>
          <p>20</p>
          </div>
        </div>
            </div>
          </li>
        `
    )
    .join("");
};

function render(cb, ref) {
  const markup = cb();
  ref.insertAdjacentHTML("beforeend", markup);
  cb();
}

render(servicesTemplate, listServices);
render(listWhatDoTemplate, listWhatDo);
render(listTestimonialsTemplate, listTestimonials);
render(listBlogTemplate, listBlog);
