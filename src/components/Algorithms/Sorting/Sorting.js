import React from "react";
import AlgorithmCard from "../../Visualiser/AlgorithmCard";

export default function Sorting(props) {
  return (
    <div class={`row ${props.toggle ? "dark--one" : "light--zero"}`}>
      <div class="col">
        <AlgorithmCard name="Bubble Sort" route="bubble-sort" toggle={props.toggle} />
      </div>
      <div class="col">
        <AlgorithmCard name="Selection Sort" route="selection-sort" toggle={props.toggle} />
      </div>
      <div class="col">
        <AlgorithmCard name="Insertion Sort" route="insertion-sort" toggle={props.toggle} />
      </div>
      <div class="w-100"></div>
      <div class="col">
        <AlgorithmCard name="Merge Sort" route="merge-sort" toggle={props.toggle} />
      </div>
      <div class="col">
        <AlgorithmCard name="Heap Sort" route="heap-sort" toggle={props.toggle} />
      </div>
    </div>
  );
}
