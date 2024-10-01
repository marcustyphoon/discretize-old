import { Profession } from '@discretize/gw2-ui-new';

type JSON = string;
type ProfessionOrSpecName = React.ComponentProps<typeof Profession>['name'];

interface TemplateEntryBase {
  name: string;
  id: string;
  specialization: ProfessionOrSpecName;
  boonType?: string;
  priority?: string;
  distribution?: string;
  traits?: string;
  extras?: string;
  weaponType?: string;
  outdated: boolean;
}
type TemplateEntry = TemplateEntryBase & {
  fractal?: Partial<TemplateEntryBase>;
  raid?: Partial<TemplateEntryBase>;
};
export interface Templates {
  'GraphQL ID': string;
  list: {
    class: string;
    builds: TemplateEntry[];
  }[];
}

export interface PresetBuffs {
  'GraphQL ID': string;
  list: {
    name: string;
    hidden?: true;
    value: JSON;
  }[];
}

export interface PresetAffixes {
  'GraphQL ID': string;
  list: {
    name: string;
    hidden?: true;
    value: JSON;
  }[];
}

interface Credit {
  author: string;
  url?: string;
  log?: string;
}
export interface PresetDistribution {
  'GraphQL ID': string;
  list: {
    name: string;
    profession?: ProfessionOrSpecName;
    hidden?: true;
    value: JSON;
    noCreditOkay?: true;
    credit?: Credit[];
  }[];
}

export interface PresetExtras {
  'GraphQL ID': string;
  list: {
    name: string;
    profession?: ProfessionOrSpecName;
    hidden?: true;
    value: JSON;
  }[];
}

export interface PresetInfusions {
  'GraphQL ID': string;
  list: {
    name: string;
    value: JSON;
  }[];
}

export interface PresetTraits {
  'GraphQL ID': string;
  list: {
    name: string;
    profession?: ProfessionOrSpecName;
    traits: JSON;
    skills: JSON;
  }[];
}
