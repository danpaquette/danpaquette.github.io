---
title: "Automatically Resizing a List of Icons or Logos So They're Visually Proportional"
description: "So, I run into this a lot: I often have a series of logos or icons of varying sizes and proportions, and I want to line them up all next to each other so they look nice. This is a common design element on websites that feature customer logos, publications, or associations."
layout: post
permalink: read/:title/
cover: /resources/img/posts/proportional-logo-sizing.jpg
---

So, I run into this a lot: I often have a series of logos or icons of varying sizes and proportions, and I want to line them up all next to each other so they look nice. This is a common design element on websites that feature customer logos, publications, or associations.

<!--more-->

For my example, I picked publications. I have all my logos lined up in a nice row that wraps on smaller screen sizes. Now, to make sure they all play reasonably nice together, I'm going to make them all the same width.

![All Logos the same width.](/resources/img/posts/logos-same-width.png)

But oh no! The longer logos look fine, but the PC Magazine logo is gigantic, and The Wall Street Journal's logo is too small! That doesn't jive right at all. Let's make them all the same height. Maybe that'll work.

![All logos the same height.](/resources/img/posts/logos-same-height.png)

Oh jeez! That looks a little better I guess, but now The Wall Street Journal is gigantic, and you can hardly see the PC Magazine logo! Certainly, there must be a way to line up a list of icons or logos so they are somewhat proportional to one another.

## The Proportional Image Normalization Formula

I haven't seen anyone write about this issue specifically, so I'm naming it the "Proportional Image Normalization Formula," which is a grandiose name for what is basically grade school math—and if it already has a name, please let me know.

Anyway, here's what it looks like:

**(imageWidth / imageHeight) ** scaleFactor * widthBase**

And here's what it looks like in Javascript:

```
(function() {

  "use strict";

  window.onload = function() {

    var images = document.querySelectorAll(".media-images.media-images--config-dynamic .media-images__image");

    function adjustImageWidth(image) {
      var widthBase   = 50;
      var scaleFactor = 0.525;
      var imageRatio  = image.naturalWidth / image.naturalHeight;

      image.width = Math.pow(imageRatio, scaleFactor) * widthBase;
    }

    images.forEach(adjustImageWidth);

  };

}());
```

**And here's the result:**

![Logos resized proportionally.](/resources/img/posts/logos-proportional.png)

**View in Codepen:** <https://codepen.io/danpaquette/pen/jXpbQK>

Now our PC Magazine and Wall Street Journal logos are perfectly legible and proportional to one another. Something interesting about the formula is that it allows you to bounce between the same-width and same-height methods I first tried. If the scale factor is 0, all of the logos are the same width. If the scale factor is 1, all of the logos are the same height. I find somewhere around the middle, 0.525, to be the most attractive balance.

The width base represents our desired width, in CSS pixels, of a square image. So, in our example, the Smashing Magazine logo is square and will be 50px by 50px as set in our width base. The width base can also be moved up or down depending on screen size making the whole component even more responsive than it already is.

I used Javascript in the example above, and the way I did it, you get a flash of the images at the original size. There's lots of ways around that, but it's a little out of the scope of this tutorial. That said, you can just as easily perform the same operation in any language, or even a template language like Twig, Liquid, or Razor.

It's also very resilient. You can use images that are way too big or too small, and they'll still be plopped in like they belong. This makes it exceptional for use with a CMS where you may not always be able to control the user input.

I hope you found this useful!
