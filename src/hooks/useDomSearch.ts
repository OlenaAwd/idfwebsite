// useDomSearch.ts
import { useEffect, useState } from 'react';

function useDomSearch(attribute: string, searchQuery: string) {
  const [elements, setElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Function to search for elements with the specified attribute and value
    const searchElements = () => {
      const elements = Array.from(document.querySelectorAll(`[${attribute}="${searchQuery}"]`)) as HTMLElement[];
      setElements(elements);
    };

    // Initial search on component mount
    searchElements();

    // Optionally, you can add event listeners or other logic to trigger re-searches

    return () => {
      // Cleanup or remove any event listeners if necessary
    };
  }, [attribute, searchQuery]);

  return elements;
}

export default useDomSearch;