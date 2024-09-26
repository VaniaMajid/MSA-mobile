export interface AppinionRequestFormType {
    problem: string;
    problemTime: string;
    associatedSyptoms: string;
    testResults: string;
    goingOn: string;
    concerns: string;
    query: string;
    attachments?: (File | string)[];
  }
  