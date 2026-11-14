export interface PublishedService {
  id: string;
  slug: string;
  number: string;
  title: string;
  isPublished: boolean;
  starterLine: string;
  whoItSuits: string;
  scopeToDiscuss: string[];
  helpfulQuestion: string;
  enquiryTopic: string;
}

export interface BuildingIdea {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  designDecision: string;
  explanation: string;
  enquiryTopic: string;
}

export interface VerifiedProject {
  id: string;
  title: string;
  type: string;
  location: string;
  stage: string;
  scope: string;
  description: string;
  heroImage: string;
  gallery: Array<{
    url: string;
    caption: string;
    alt: string;
  }>;
  isApproved: boolean;
}

export interface ProcessStage {
  step: string;
  title: string;
  decision: string;
  detail: string;
}

export interface EnquirySubmission {
  name: string;
  mobile: string;
  location: string;
  projectType: string;
  description: string;
}
