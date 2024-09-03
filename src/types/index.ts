export interface Skill {
  name: string
  icon: string
  tag: string
}

export interface Experience {
  company: string
  job: string
  start: string
  end: string | null
  description: string[]
}

export interface Diploma {
  name: string
  school: string
  start: string
  end: string
}

export interface Project {
  name: string
  start: string
  end: string | null
  description: string
  skills: string[]
  icon: string
  link: string
}

export interface Route {
  id: string
  name: string
}