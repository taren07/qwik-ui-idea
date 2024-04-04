import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import DropDownMenuA from "../components/drop-down/drop-down-menu-a";

export default component$(() => {
	return (
		<>
			<DropDownMenuA />
		</>
	);
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
