export interface AddressResult {
  address: string;
  formatted_address: string;
  available: boolean;
  technologies: Technology[];
}

interface Technology {
  type: "fibre";
  max_speed_down: number;
  max_speed_up: number;
  plans_available: string[];
}

const MOCK_ADDRESSES: Record<string, AddressResult> = {
  default_available: {
    address: "",
    formatted_address: "",
    available: true,
    technologies: [
      {
        type: "fibre",
        max_speed_down: 950,
        max_speed_up: 450,
        plans_available: ["FIBRE-100", "FIBRE-500", "FIBRE-900"],
      },
    ],
  },
  default_unavailable: {
    address: "",
    formatted_address: "",
    available: false,
    technologies: [],
  },
};

export async function mockQualifyAddress(
  address: string
): Promise<AddressResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // For the prototype, most addresses are "available"
  // Addresses containing "rural" or ending in odd numbers are unavailable
  const lastChar = address.trim().slice(-1);
  const isUnavailable =
    address.toLowerCase().includes("rural") || lastChar === "7";

  const template = isUnavailable
    ? MOCK_ADDRESSES.default_unavailable
    : MOCK_ADDRESSES.default_available;

  return {
    ...template,
    address,
    formatted_address: address,
  };
}
