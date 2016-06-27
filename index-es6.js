import {select} from "d3-selection";
import "d3-transition";

export default function makeSelection(node){
  return select(node);
};
