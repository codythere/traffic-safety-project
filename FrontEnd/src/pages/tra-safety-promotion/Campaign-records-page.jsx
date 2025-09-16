import { useState } from "react";
import { imagesAlbum1 } from "../../constants";
import { Carousel } from "react-carousel-minimal";
import SelectedListItem from "../../components/SelectedListItem";

export default function CampaignRecordsPage() {
  const [currentAlbum, setCurrentAlbum] = useState(imagesAlbum1);

  return (
    <>
      <section className="w-full  p-[20px]  mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center px-[50px] sm:gap-[60px]">
          <div className="sm:pb-[150px]">
            <div className="flex flex-col items-start mt-[55px]">
              <div>
                <h2 className="text-[#000000] text-[29.16px] sm:text-[34.02px] font-semibold select-none text-center lg:text-start">
                  交安活動照片
                </h2>
              </div>
              <div>
                <h3 className="text-[#006794] text-[18.856px] sm:text-[22px] font-semibold select-none text-center lg:text-start">
                  Traffic Safety Campaign Record
                </h3>
              </div>
            </div>
            <SelectedListItem setCurrentAlbum={setCurrentAlbum} />
          </div>
          <div className="pb-[80px]">
            <Carousel
              data={currentAlbum}
              time={2250}
              width="615px"
              height="430.5px"
              radius="2.5px"
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "615px",
                maxHeight: "430.5px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

CampaignRecordsPage.propTypes = {};
