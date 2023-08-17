import wine1 from "./../../assets/gallery/wine1.jpg";
import wine2 from "./../../assets/gallery/wine2.jpg";
import box1 from "./../../assets/gallery/box1.jpg";
import box2 from "./../../assets/gallery/box2.jpg";
import flower from "./../../assets/gallery/flower.jpg";
import clock from "./../../assets/gallery/clock.jpg";


const ImageGallery = () => {
  return (
   <>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
    <div class="grid gap-3">
    <div>
            <img class="h-auto max-w-full rounded-lg" src={wine1} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={wine2} alt=""></img>
        </div>
    </div>
    <div class="grid gap-3">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={clock} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={flower} alt=""></img>
        </div>
    </div>
    <div class="grid gap-3">
         <div>
            <img class="h-auto max-w-full rounded-lg" src={box2} alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={box2} alt=""></img>
        </div>
    </div>
</div>
</>
  );
};

export default ImageGallery;
