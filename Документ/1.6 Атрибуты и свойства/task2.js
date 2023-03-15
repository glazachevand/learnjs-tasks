    let links = document.querySelectorAll('a');
    
    for (const link of links) {
      let href = link.getAttribute('href');
      console.log(href);
      if (href && !href.startsWith('http://internal.com') && href.includes('://')) {
        link.style.color = 'orange';
      }
    }