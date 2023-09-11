/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import { Avatar1 } from "../Avatar1";
import { Avatar11 } from "../Avatar11";
import { Avatar12 } from "../Avatar12";
import { Avatar13 } from "../Avatar13";
import { Avatar15 } from "../Avatar15";
import { Avatar16 } from "../Avatar16";
import { Avatar17 } from "../Avatar17";
import { Avatar2 } from "../Avatar2";
import { Avatar3 } from "../Avatar3";
import { Avatar4 } from "../Avatar4";
import { Avatar5 } from "../Avatar5";
import { Avatar6 } from "../Avatar6";
import { Avatar8 } from "../Avatar8";
import { Avatar9 } from "../Avatar9";
import { AvatarWrapper } from "../AvatarWrapper";
import { DivWrapper } from "../DivWrapper";
import { TableHeader } from "../TableHeader";
import { TableItems } from "../TableItems";
import "./style.css";

export const RankingsList = ({
  screen,
  className,
  tableItemsArtistCardPropertyMediumWrapper = <Avatar className="avatar-10" />,
  override = <AvatarWrapper className="avatar-14" />,
  tableItemsArtistCardPropertyMediumWrapper1 = <DivWrapper className="avatar-7" />,
  tableItemsArtistCardPropertyMediumWrapper2 = <DivWrapper className="avatar-7" />,
  tableItemsArtistCardPropertyMediumWrapper3 = <Avatar3 className="avatar-3-instance" />,
  tableItemsArtistCardPropertyMediumWrapper4 = <Avatar5 className="avatar-5-instance" />,
  tableItemsArtistCardPropertyMediumWrapper5 = <Avatar8 className="avatar-8-instance" />,
  tableItemsArtistCardPropertyMediumWrapper6 = <Avatar8 className="avatar-8-instance" />,
  tableItemsArtistCardPropertyMediumWrapper7 = <Avatar3 className="avatar-3-instance" />,
  tableItemsArtistCardPropertyMediumWrapper8 = <Avatar8 className="avatar-8-instance" />,
  tableItemsArtistCardPropertyMediumWrapper9 = <Avatar4 className="avatar-4-instance" />,
  tableItemsArtistCardPropertyMediumWrapper10 = <Avatar1 className="asset-4" />,
  tableItemsArtistCardPropertyMediumWrapper11 = <Avatar className="avatar-10" />,
  tableItemsArtistCardPropertyMediumWrapper12 = <Avatar4 className="avatar-4-instance" />,
  tableItemsArtistCardPropertyMediumWrapper13 = <Avatar8 className="avatar-8-instance" />,
  tableItemsArtistCardPropertyMediumWrapper14 = <Avatar className="avatar-10" />,
  tableItemsArtistCardPropertyMediumWrapper15 = <Avatar6 className="avatar-6-instance" />,
  tableItemsArtistCardPropertyMediumWrapper16 = <AvatarWrapper className="avatar-14" />,
  tableItemsArtistCardPropertyMediumWrapper17 = <Avatar9 className="avatar-9-instance" />,
  tableItemsArtistCardPropertyMediumWrapper18 = <Avatar9 className="avatar-9-instance" />,
  tableItemsArtistCardPropertyMediumWrapper19 = <Avatar1 className="asset-5" />,
  tableItemsArtistCardPropertyMediumWrapper20 = <Avatar2 className="avatar-2-instance" />,
  tableItemsArtistCardPropertyMediumWrapper21 = <Avatar3 className="asset-6" />,
  tableItemsArtistCardPropertyMediumWrapper22 = <Avatar4 className="asset-7" />,
  tableItemsArtistCardPropertyMediumWrapper23 = <Avatar5 className="asset-8" />,
  tableItemsArtistCardPropertyMediumWrapper24 = <Avatar6 className="asset-9" />,
  tableItemsArtistCardPropertyMediumWrapper25 = <DivWrapper className="avatar-7-instance" />,
  tableItemsArtistCardPropertyMediumWrapper26 = <Avatar8 className="asset-10" />,
  tableItemsArtistCardPropertyMediumWrapper27 = <Avatar9 className="asset-11" />,
  tableItemsArtistCardPropertyMediumWrapper28 = <Avatar className="avatar-10-instance" />,
  tableItemsArtistCardPropertyMediumWrapper29 = <Avatar11 className="avatar-11-instance" />,
  tableItemsArtistCardPropertyMediumWrapper30 = <Avatar12 className="avatar-12-instance" />,
  tableItemsArtistCardPropertyMediumWrapper31 = <Avatar13 className="avatar-13-instance" />,
  tableItemsArtistCardPropertyMediumWrapper32 = <AvatarWrapper className="avatar-14-instance" />,
  tableItemsArtistCardPropertyMediumWrapper33 = <Avatar15 className="avatar-15-instance" />,
  tableItemsArtistCardPropertyMediumWrapper34 = <Avatar16 className="avatar-16-instance" />,
  tableItemsArtistCardPropertyMediumWrapper35 = <Avatar17 className="avatar-17-instance" />,
  tableItemsArtistCardPropertyMediumWrapper36 = <Avatar1 className="asset-5" />,
  tableItemsArtistCardPropertyMediumWrapper37 = <Avatar className="avatar-10-instance" />,
  tableItemsArtistCardPropertyMediumWrapper38 = <Avatar3 className="asset-6" />,
}) => {
  return (
    <div className={`rankings-list screen-19-${screen} ${className}`}>
      <TableHeader
        className={`${screen === "desktop" ? "class-14" : "class-15"}`}
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Marcus Saris" : screen === "mobile" ? "Zain Dokidis" : "Jaydon Ekstrom Bothman"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper19}
        rank="1"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Alfonso Bator" : screen === "mobile" ? "Ruben Vetrovs" : "Ruben Carder"
        }
        artistCardPropertyMediumWrapper={override}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper20}
        rank="2"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Nolan Mango" : screen === "mobile" ? "Maren Franci" : "Alfredo Septimus"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper1}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper21}
        rank="3"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Nolan Mango" : screen === "mobile" ? "Emerson Carder" : "Davis Franci"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper2}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper22}
        rank="4"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Miracle Gouse" : screen === "mobile" ? "Zain Botosh" : "Livia Rosser"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper3}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper23}
        rank="5"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Alena Septimus" : screen === "mobile" ? "Talan Korsgaard" : "Kianna Donin"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper4}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper24}
        rank="6"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Desirae Lipshutz" : screen === "mobile" ? "Haylie Dias" : "Phillip Lipshutz"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper5}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper25}
        rank="7"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Paityn Kenter" : screen === "mobile" ? "James Donin" : "Maria Rosser"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper6}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper26}
        rank="8"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Alena Vaccaro" : screen === "mobile" ? "Erin Siphron" : "Kianna Stanton"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper7}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper27}
        rank="9"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Randy Carder" : screen === "mobile" ? "Cristofer Levin" : "Angel Lubin"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper8}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper28}
        rank="10"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Hanna Culhane" : screen === "mobile" ? "Alena Schleifer" : "Allison Torff"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper9}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper29}
        rank="11"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Jocelyn Workman" : screen === "mobile" ? "Dulce Vetrovs" : "Davis Workman"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper10}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper30}
        rank="12"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Desirae Septimus" : screen === "mobile" ? "Nolan Siphron" : "Lindsey Lipshutz"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper11}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper31}
        rank="13"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Ahmad Franci" : screen === "mobile" ? "Omar Stanton" : "Randy Carder"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper12}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper32}
        rank="14"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Maria Bergson" : screen === "mobile" ? "Omar Lipshutz" : "Lydia Culhane"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper13}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper33}
        rank="15"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={screen === "tablet" ? "Ahmad Geidt" : screen === "mobile" ? "Terry Donin" : "Rayna Bator"}
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper14}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper34}
        rank="16"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Skylar Mango" : screen === "mobile" ? "Erin Botosh" : "Jocelyn Westervelt"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper15}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper35}
        rank="17"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Rayna Geidt" : screen === "mobile" ? "Cheyenne Rhiel" : "Marilyn Torff"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper16}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper36}
        rank="18"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Marley Rosser" : screen === "mobile" ? "Jaxson Vaccaro" : "Skylar Levin"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper17}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper37}
        rank="19"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
      <TableItems
        artistCardArtistName={
          screen === "tablet" ? "Tatiana Philips" : screen === "mobile" ? "Jordyn Dias" : "Terry Dorwart"
        }
        artistCardPropertyMediumWrapper={tableItemsArtistCardPropertyMediumWrapper18}
        change={["desktop", "tablet"].includes(screen) ? "+1.41%" : undefined}
        className={`${screen === "desktop" && "class-16"}`}
        divClassName={`${screen === "tablet" ? "class-17" : "class-18"}`}
        nftsSold={screen === "desktop" ? "602" : undefined}
        override={tableItemsArtistCardPropertyMediumWrapper38}
        rank="20"
        screen={screen === "tablet" ? "tablet" : screen === "mobile" ? "mobile" : "desktop"}
        volume="12.4 ETH"
      />
    </div>
  );
};

RankingsList.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
