import clusterImage145px from "public/images/locations/cluster.png?resize&size=145";
import dreamImage145px from "public/images/locations/dream.png?resize&size=145";
import fantasytownImage145px from "public/images/locations/fantasytown.png?resize&size=145";
import microverseImage145px from "public/images/locations/microverse.png?resize&size=145";
import planetImage145px from "public/images/locations/planet.png?resize&size=145";
import resortImage145px from "public/images/locations/resort.png?resize&size=145";
import spacestationImage145px from "public/images/locations/spacestation.png?resize&size=145";
import tvImage145px from "public/images/locations/tv.png?resize&size=145";
import unknownImage145px from "public/images/locations/unknown.png?resize&size=145";

import clusterImage from "public/images/locations/cluster.png";
import dreamImage from "public/images/locations/dream.png";
import fantasytownImage from "public/images/locations/fantasytown.png";
import microverseImage from "public/images/locations/microverse.png";
import planetImage from "public/images/locations/planet.png";
import resortImage from "public/images/locations/resort.png";
import spacestationImage from "public/images/locations/spacestation.png";
import tvImage from "public/images/locations/tv.png";
import unknownImage from "public/images/locations/unknown.png";

const chooseImage = (type, size) => {
  switch (type) {
    case "cluster": {
      switch (size) {
        case "small": {
          return clusterImage145px;
        }
        case "large": {
          return clusterImage;
        }
        default: {
          break;
        }
      }
    }
    case "dream": {
      switch (size) {
        case "small": {
          return dreamImage145px;
        }
        case "large": {
          return dreamImage;
        }
        default: {
          break;
        }
      }
    }
    case "fantasy town": {
      switch (size) {
        case "small": {
          return fantasytownImage145px;
        }
        case "large": {
          return fantasytownImage;
        }
        default: {
          break;
        }
      }
    }
    case "microverse": {
      switch (size) {
        case "small": {
          return microverseImage145px;
        }
        case "large": {
          return microverseImage;
        }
        default: {
          break;
        }
      }
    }
    case "planet": {
      switch (size) {
        case "small": {
          return planetImage145px;
        }
        case "large": {
          return planetImage;
        }
        default: {
          break;
        }
      }
      return;
    }
    case "resort": {
      switch (size) {
        case "small": {
          return resortImage145px;
        }
        case "large": {
          return resortImage;
        }
        default: {
          break;
        }
      }
    }
    case "space station": {
      switch (size) {
        case "small": {
          return spacestationImage145px;
        }
        case "large": {
          return spacestationImage;
        }
        default: {
          break;
        }
      }
    }
    case "tv": {
      switch (size) {
        case "small": {
          return tvImage145px;
        }
        case "large": {
          return tvImage;
        }
        default: {
          break;
        }
      }
    }
    case "unknown": {
      switch (size) {
        case "small": {
          return unknownImage145px;
        }
        case "large": {
          return unknownImage;
        }
        default: {
          break;
        }
      }
    }
    default: {
      break;
    }
  }
};

export default chooseImage;
