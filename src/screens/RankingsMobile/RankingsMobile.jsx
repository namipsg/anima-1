import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Avatar } from "../../components/Avatar";
import { Avatar1 } from "../../components/Avatar1";
import { Avatar11 } from "../../components/Avatar11";
import { Avatar12 } from "../../components/Avatar12";
import { Avatar13 } from "../../components/Avatar13";
import { Avatar15 } from "../../components/Avatar15";
import { Avatar16 } from "../../components/Avatar16";
import { Avatar17 } from "../../components/Avatar17";
import { Avatar2 } from "../../components/Avatar2";
import { Avatar3 } from "../../components/Avatar3";
import { Avatar4 } from "../../components/Avatar4";
import { Avatar5 } from "../../components/Avatar5";
import { Avatar6 } from "../../components/Avatar6";
import { Avatar8 } from "../../components/Avatar8";
import { Avatar9 } from "../../components/Avatar9";
import { AvatarWrapper } from "../../components/AvatarWrapper";
import { DivWrapper } from "../../components/DivWrapper";
import { Footer } from "../../components/Footer";
import { HeadlineSubhead } from "../../components/HeadlineSubhead";
import { Navigation } from "../../components/Navigation";
import { RankingsList } from "../../components/RankingsList";
import { TabBar } from "../../components/TabBar";
import { Envelopesimple } from "../../icons/Envelopesimple";
import { Twitterlogo } from "../../icons/Twitterlogo";
import { Twitterlogo5 } from "../../icons/Twitterlogo5";
import { User } from "../../icons/User";
import "./style.css";

export const RankingsMobile = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="rankings-mobile"
      style={{
        alignItems:
          (screenWidth >= 834 && screenWidth < 1280) || screenWidth < 834
            ? "flex-start"
            : screenWidth >= 1280
            ? "center"
            : undefined,
        backgroundColor:
          (screenWidth >= 834 && screenWidth < 1280) || screenWidth < 834
            ? "var(--background)"
            : screenWidth >= 1280
            ? "#2b2b2b"
            : undefined,
        minWidth:
          screenWidth < 834
            ? "375px"
            : screenWidth >= 834 && screenWidth < 1280
            ? "834px"
            : screenWidth >= 1280
            ? "1280px"
            : undefined,
      }}
    >
      <Navigation
        buttonIcon={screenWidth >= 1280 ? <User className="instance-node-3" color="white" /> : undefined}
        className="instance-node-2"
        property1={
          screenWidth < 834
            ? "navigation-mobile"
            : screenWidth >= 834 && screenWidth < 1280
            ? "navigation-tablet"
            : screenWidth >= 1280
            ? "navigation-desktop"
            : undefined
        }
      />
      <HeadlineSubhead
        className={`${(screenWidth >= 1280 || screenWidth < 834) && "instance-node-2"} ${
          screenWidth >= 834 && screenWidth < 1280 && "class-19"
        }`}
        screen={
          screenWidth < 834
            ? "default"
            : screenWidth >= 834 && screenWidth < 1280
            ? "tablet"
            : screenWidth >= 1280
            ? "desktop"
            : undefined
        }
      />
      <TabBar
        className="instance-node-2"
        screen={
          screenWidth < 834
            ? "mobile"
            : screenWidth >= 834 && screenWidth < 1280
            ? "tablet"
            : screenWidth >= 1280
            ? "desktop"
            : undefined
        }
      />
      <RankingsList
        className="instance-node-2"
        override={
          screenWidth < 834 ? (
            <AvatarWrapper className="asset-14" />
          ) : screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar2 className="asset-15" />
          ) : undefined
        }
        screen={
          screenWidth < 834
            ? "mobile"
            : screenWidth >= 834 && screenWidth < 1280
            ? "tablet"
            : screenWidth >= 1280
            ? "desktop"
            : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper={
          screenWidth < 834 ? (
            <Avatar className="asset-12" />
          ) : screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar1 className="asset-13" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper1={
          screenWidth < 834 ? (
            <DivWrapper className="asset-16" />
          ) : screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar3 className="asset-17" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper10={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar12 className="asset-24" />
          ) : screenWidth < 834 ? (
            <Avatar1 className="asset-13" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper11={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar13 className="asset-25" />
          ) : screenWidth < 834 ? (
            <Avatar className="asset-12" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper12={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <AvatarWrapper className="asset-14" />
          ) : screenWidth < 834 ? (
            <Avatar4 className="asset-18" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper13={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar15 className="asset-26" />
          ) : screenWidth < 834 ? (
            <Avatar8 className="asset-21" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper14={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar16 className="asset-27" />
          ) : screenWidth < 834 ? (
            <Avatar className="asset-12" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper15={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar17 className="asset-28" />
          ) : screenWidth < 834 ? (
            <Avatar6 className="asset-20" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper16={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar2 className="asset-15" />
          ) : screenWidth < 834 ? (
            <AvatarWrapper className="asset-14" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper17={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar1 className="asset-13" />
          ) : screenWidth < 834 ? (
            <Avatar9 className="asset-22" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper18={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar5 className="asset-19" />
          ) : screenWidth < 834 ? (
            <Avatar9 className="asset-22" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper19={screenWidth >= 1280 ? <Avatar1 className="asset-29" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper2={
          screenWidth < 834 ? (
            <DivWrapper className="asset-16" />
          ) : screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar4 className="asset-18" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper20={screenWidth >= 1280 ? <Avatar2 className="asset-30" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper21={screenWidth >= 1280 ? <Avatar3 className="asset-31" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper22={screenWidth >= 1280 ? <Avatar4 className="asset-32" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper23={screenWidth >= 1280 ? <Avatar5 className="asset-33" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper24={screenWidth >= 1280 ? <Avatar6 className="asset-34" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper25={
          screenWidth >= 1280 ? <DivWrapper className="asset-35" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper26={screenWidth >= 1280 ? <Avatar8 className="asset-36" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper27={screenWidth >= 1280 ? <Avatar9 className="asset-37" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper28={screenWidth >= 1280 ? <Avatar className="asset-38" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper29={
          screenWidth >= 1280 ? <Avatar11 className="asset-39" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper3={
          screenWidth < 834 ? (
            <Avatar3 className="asset-17" />
          ) : screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar5 className="asset-19" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper30={
          screenWidth >= 1280 ? <Avatar12 className="asset-40" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper31={
          screenWidth >= 1280 ? <Avatar13 className="asset-41" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper32={
          screenWidth >= 1280 ? <AvatarWrapper className="asset-42" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper33={
          screenWidth >= 1280 ? <Avatar15 className="asset-43" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper34={
          screenWidth >= 1280 ? <Avatar16 className="asset-44" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper35={
          screenWidth >= 1280 ? <Avatar17 className="asset-45" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper36={screenWidth >= 1280 ? <Avatar1 className="asset-29" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper37={screenWidth >= 1280 ? <Avatar className="asset-38" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper38={screenWidth >= 1280 ? <Avatar3 className="asset-31" /> : undefined}
        tableItemsArtistCardPropertyMediumWrapper4={
          screenWidth < 834 ? (
            <Avatar5 className="asset-19" />
          ) : screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar6 className="asset-20" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper5={
          screenWidth < 834 ? (
            <Avatar8 className="asset-21" />
          ) : screenWidth >= 834 && screenWidth < 1280 ? (
            <DivWrapper className="asset-16" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper6={
          (screenWidth >= 834 && screenWidth < 1280) || screenWidth < 834 ? <Avatar8 className="asset-21" /> : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper7={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar9 className="asset-22" />
          ) : screenWidth < 834 ? (
            <Avatar3 className="asset-17" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper8={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar className="asset-12" />
          ) : screenWidth < 834 ? (
            <Avatar8 className="asset-21" />
          ) : undefined
        }
        tableItemsArtistCardPropertyMediumWrapper9={
          screenWidth >= 834 && screenWidth < 1280 ? (
            <Avatar11 className="asset-23" />
          ) : screenWidth < 834 ? (
            <Avatar4 className="asset-18" />
          ) : undefined
        }
      />
      <Footer
        NFTMarketplace={
          screenWidth >= 1280
            ? "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/nft-marketplace-9.svg"
            : undefined
        }
        className={`${((screenWidth >= 834 && screenWidth < 1280) || screenWidth < 834) && "instance-node-2"} ${
          screenWidth >= 1280 && "class-20"
        }`}
        divider={
          screenWidth >= 1280
            ? "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/divider-4.svg"
            : undefined
        }
        footerInfoClassName={`${screenWidth >= 1280 && "class-22"}`}
        frameClassName={`${screenWidth >= 1280 && "class-21"}`}
        icon={
          (screenWidth >= 834 && screenWidth < 1280) || screenWidth < 834 ? (
            <Twitterlogo className="twitter-logo" />
          ) : screenWidth >= 1280 ? (
            <Twitterlogo5 className="twitter-logo" />
          ) : undefined
        }
        screen={
          screenWidth < 834
            ? "mobile"
            : screenWidth >= 834 && screenWidth < 1280
            ? "tablet"
            : screenWidth >= 1280
            ? "desktop"
            : undefined
        }
        subscribeWidgetButtonIcon={
          screenWidth < 834 ? <Envelopesimple className="instance-node-3" color="white" /> : undefined
        }
      />
    </div>
  );
};
