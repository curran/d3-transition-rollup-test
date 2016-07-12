import {select} from "d3-selection";
import "d3-transition";
import ReactiveModel from "reactive-model";

export default function makeSelection(node){
  var my = ReactiveModel()("node", node);
  return select(my.node());
};
