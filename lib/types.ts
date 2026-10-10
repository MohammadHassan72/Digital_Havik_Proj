export type Brand = { id: string; name: string; website: string; industry: string; audience: string; goal: string; createdAt: string };
export type Task = { id: string; title: string; brandId: string; dueDate: string; priority: 'Low' | 'Medium' | 'High'; status: 'Todo' | 'In progress' | 'Done' };
export type Campaign = { id: string; name: string; brandId: string; platform: 'Meta Ads' | 'Google Ads' | 'Organic' | 'Other'; objective: string; budget: number; status: 'Draft' | 'Planned' | 'Active' | 'Paused' };
export type DataMode = 'demo' | 'manual' | 'live';
