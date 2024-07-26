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