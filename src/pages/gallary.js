import "../App.scss";
import picA from "../images/picA.jpg";
import picB from "../images/picB.jpg";
import picC from "../images/picC.jpg";
import picD from "../images/picD.jpg";
import picE from "../images/picE.jpg";
import picF from "../images/picF.jpg";
import picG from "../images/picG.jpg";
import picH from "../images/picH.jpg";
import picK from "../images/picK.jpg";
import picI from "../images/picI.jpg";
import picL from "../images/picL.jpg";
import picJ from "../images/picJ.jpg";

function Gallary() {
  return (
    <div className="Gallary">
      <div class="gallery">
        <div class="gallery__column">
          <a href={picA} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picA}
                alt="Portrait by Jessica Felicio"
                class="gallery__image"
              />

              <figcaption class="gallery__caption">
                {/* Portrait by Jessica Felicio */}
              </figcaption>
            </figure>
          </a>

          <a href={picB} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picB}
                alt="Portrait by Oladimeji Odunsi"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Oladimeji Odunsi */}
              </figcaption>
            </figure>
          </a>

          <a href={picC} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picC}
                alt="Portrait by Alex Perez"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Alex Perez */}
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a href={picD} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picD}
                alt="Portrait by Noah Buscher"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Noah Buscher */}
              </figcaption>
            </figure>
          </a>

          <a href={picE} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picE}
                alt="Portrait by Ivana Cajina"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Ivana Cajina */}
              </figcaption>
            </figure>
          </a>

          <a href={picF} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picF}
                alt="Portrait by Sam Burriss"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Sam Burriss */}
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a href={picG} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picG}
                alt="Portrait by Mari Lezhava"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Mari Lezhava */}
              </figcaption>
            </figure>
          </a>

          <a href={picH} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picH}
                alt="Portrait by Ethan Haddox"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Ethan Haddox */}
              </figcaption>
            </figure>
          </a>

          <a href={picI} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picJ}
                alt="Portrait by Amir Geshani"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Amir Geshani */}
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a href={picJ} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picJ}
                alt="Portrait by Guilian Fremaux"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Guilian Fremaux */}
              </figcaption>
            </figure>
          </a>

          <a href={picL} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picL}
                alt="Portrait by Jasmin Chew"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Jasmin Chew */}
              </figcaption>
            </figure>
          </a>

          <a href={picK} target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
              <img
                src={picK}
                alt="Portrait by Dima DallAcqua"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                {/* Portrait by Dima DallAcqua */}
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Gallary;
