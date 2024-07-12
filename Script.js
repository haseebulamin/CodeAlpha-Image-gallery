const images = [
    { src: '/Images/F1.jpg', category: 'family' },
    { src: '/Images/C1.jpg', category: 'child' },
    { src: '/Images/N1.jpg', category: 'nature' },
    { src: '/Images/F2.jpg', category: 'family' },
    { src: '/Images/C2.jpg', category: 'child' },
    { src: '/Images/N2.jpg', category: 'nature' },
    { src: '/Images/F3.jpg', category: 'family' },
    { src: '/Images/C3.jpg', category: 'child' },
    { src: '/Images/N3.jpg', category: 'nature' },
    { src: '/Images/F4.jpg', category: 'family' },
    { src: '/Images/C4.jpg', category: 'child' },
    { src: '/Images/N4.jpg', category: 'nature' },
    { src: '/Images/F5.jpg', category: 'family' },
    { src: '/Images/C5.jpg', category: 'child' },
    { src: '/Images/F6.jpg', category: 'family' },
    { src: '/Images/C6.jpg', category: 'child' },
    { src: '/Images/F7.jpg', category: 'family' },
];

const gallery = document.getElementById('gallery');

images.forEach(image => {
    const div = document.createElement('div');
    div.classList.add('pic', image.category);
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = '';
    div.appendChild(img);
    gallery.appendChild(div);
});

function filterImages(category, element) {
    const allImages = document.querySelectorAll('.gallery .pic');
    allImages.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    // Remove active class from all labels
    const labels = document.querySelectorAll('.toggle label');
    labels.forEach(label => label.classList.remove('active'));

    // Add active class to the clicked label
    element.classList.add('active');
}
