"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  MessageSquare,
  Plus,
  Search,
  Calendar,
  Building,
  User,
  Clock,
  CheckCircle,
  Star,
  BookOpen,
  Target,
  Lightbulb,
  FileText
} from "lucide-react"

interface Interview {
  id: string
  company: string
  position: string
  type: 'phone' | 'video' | 'onsite' | 'technical' | 'behavioral' | 'panel'
  date: string
  time: string
  interviewer: string
  status: 'scheduled' | 'completed' | 'cancelled'
  notes: string
  outcome?: 'passed' | 'rejected' | 'pending'
}

interface PrepQuestion {
  id: string
  category: string
  question: string
  answer: string
  difficulty: 'easy' | 'medium' | 'hard'
  practiced: boolean
}

const interviewTypes = {
  phone: "Phone Screen",
  video: "Video Call",
  onsite: "On-site",
  technical: "Technical",
  behavioral: "Behavioral",
  panel: "Panel Interview"
}

const commonQuestions: PrepQuestion[] = [
  {
    id: "1",
    category: "General",
    question: "Tell me about yourself",
    answer: "",
    difficulty: "easy",
    practiced: false
  },
  {
    id: "2",
    category: "General",
    question: "Why do you want to work here?",
    answer: "",
    difficulty: "medium",
    practiced: false
  },
  {
    id: "3",
    category: "General",
    question: "What are your greatest strengths?",
    answer: "",
    difficulty: "easy",
    practiced: false
  },
  {
    id: "4",
    category: "Behavioral",
    question: "Describe a challenging project you worked on",
    answer: "",
    difficulty: "medium",
    practiced: false
  },
  {
    id: "5",
    category: "Behavioral",
    question: "Tell me about a time you had to work with a difficult team member",
    answer: "",
    difficulty: "hard",
    practiced: false
  },
  {
    id: "6",
    category: "Technical",
    question: "Explain your approach to solving complex problems",
    answer: "",
    difficulty: "medium",
    practiced: false
  },
  {
    id: "7",
    category: "Technical",
    question: "Describe your experience with [specific technology]",
    answer: "",
    difficulty: "medium",
    practiced: false
  },
  {
    id: "8",
    category: "Career",
    question: "Where do you see yourself in 5 years?",
    answer: "",
    difficulty: "easy",
    practiced: false
  }
]

export function InterviewPrep() {
  const [interviews, setInterviews] = useState<Interview[]>([
    {
      id: "1",
      company: "TechCorp",
      position: "Senior Frontend Developer",
      type: "video",
      date: "2024-09-10",
      time: "14:00",
      interviewer: "Sarah Johnson - Engineering Manager",
      status: "scheduled",
      notes: "First round technical interview, focus on React and system design"
    },
    {
      id: "2",
      company: "StartupX",
      position: "Full Stack Engineer",
      type: "phone",
      date: "2024-09-05",
      time: "10:30",
      interviewer: "Mike Chen - CTO",
      status: "completed",
      notes: "Phone screening went well, discussed background and interests",
      outcome: "passed"
    }
  ])

  const [questions, setQuestions] = useState<PrepQuestion[]>(commonQuestions)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showQuestionDialog, setShowQuestionDialog] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const [interviewForm, setInterviewForm] = useState({
    company: "",
    position: "",
    type: "video" as Interview['type'],
    date: "",
    time: "",
    interviewer: "",
    notes: ""
  })

  const [questionForm, setQuestionForm] = useState({
    category: "",
    question: "",
    answer: "",
    difficulty: "medium" as PrepQuestion['difficulty']
  })

  const upcomingInterviews = interviews
    .filter(i => i.status === 'scheduled' && new Date(i.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const recentInterviews = interviews
    .filter(i => i.status === 'completed')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || q.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const categories = [...new Set(questions.map(q => q.category))]
  const practicedCount = questions.filter(q => q.practiced).length

  const handleAddInterview = () => {
    if (!interviewForm.company || !interviewForm.position) return

    const newInterview: Interview = {
      id: Date.now().toString(),
      ...interviewForm,
      status: 'scheduled'
    }

    setInterviews(prev => [...prev, newInterview])
    setInterviewForm({
      company: "",
      position: "",
      type: "video",
      date: "",
      time: "",
      interviewer: "",
      notes: ""
    })
    setShowAddDialog(false)
  }

  const handleAddQuestion = () => {
    if (!questionForm.question || !questionForm.category) return

    const newQuestion: PrepQuestion = {
      id: Date.now().toString(),
      ...questionForm,
      practiced: false
    }

    setQuestions(prev => [...prev, newQuestion])
    setQuestionForm({
      category: "",
      question: "",
      answer: "",
      difficulty: "medium"
    })
    setShowQuestionDialog(false)
  }

  const togglePracticed = (id: string) => {
    setQuestions(prev => prev.map(q => 
      q.id === id ? { ...q, practiced: !q.practiced } : q
    ))
  }

  const updateAnswer = (id: string, answer: string) => {
    setQuestions(prev => prev.map(q => 
      q.id === id ? { ...q, answer } : q
    ))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200' 
      case 'hard': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <MessageSquare className="mr-2 h-8 w-8" />
            Interview Preparation
          </h1>
          <p className="text-muted-foreground">
            Prepare for interviews and track your progress
          </p>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Interviews</TabsTrigger>
          <TabsTrigger value="history">Interview History</TabsTrigger>
          <TabsTrigger value="questions">Practice Questions</TabsTrigger>
          <TabsTrigger value="companies">Company Research</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Schedule Interview
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule New Interview</DialogTitle>
                  <DialogDescription>
                    Add details about your upcoming interview
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company*</Label>
                      <Input
                        id="company"
                        value={interviewForm.company}
                        onChange={(e) => setInterviewForm(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position*</Label>
                      <Input
                        id="position"
                        value={interviewForm.position}
                        onChange={(e) => setInterviewForm(prev => ({ ...prev, position: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Interview Type</Label>
                    <Select value={interviewForm.type} onValueChange={(value) => setInterviewForm(prev => ({ ...prev, type: value as Interview['type'] }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(interviewTypes).map(([key, label]) => (
                          <SelectItem key={key} value={key}>{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={interviewForm.date}
                        onChange={(e) => setInterviewForm(prev => ({ ...prev, date: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={interviewForm.time}
                        onChange={(e) => setInterviewForm(prev => ({ ...prev, time: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interviewer">Interviewer</Label>
                    <Input
                      id="interviewer"
                      value={interviewForm.interviewer}
                      onChange={(e) => setInterviewForm(prev => ({ ...prev, interviewer: e.target.value }))}
                      placeholder="e.g. Sarah Johnson - Engineering Manager"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={interviewForm.notes}
                      onChange={(e) => setInterviewForm(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Additional notes about this interview..."
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleAddInterview}>Schedule Interview</Button>
                  <Button variant="outline" onClick={() => setShowAddDialog(false)}>Cancel</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {upcomingInterviews.length === 0 ? (
              <Card className="md:col-span-2">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">No upcoming interviews</h3>
                  <p className="text-muted-foreground text-center">
                    Schedule your interviews to start preparing
                  </p>
                </CardContent>
              </Card>
            ) : (
              upcomingInterviews.map((interview) => (
                <Card key={interview.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <Building className="mr-2 h-5 w-5" />
                          {interview.company}
                        </CardTitle>
                        <CardDescription>{interview.position}</CardDescription>
                      </div>
                      <Badge variant="outline">
                        {interviewTypes[interview.type]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {new Date(interview.date).toLocaleDateString()} at {interview.time}
                    </div>
                    {interview.interviewer && (
                      <div className="flex items-center text-sm">
                        <User className="mr-2 h-4 w-4 text-muted-foreground" />
                        {interview.interviewer}
                      </div>
                    )}
                    {interview.notes && (
                      <p className="text-sm text-muted-foreground">{interview.notes}</p>
                    )}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Prep Notes
                      </Button>
                      <Button size="sm" variant="outline">
                        <Target className="mr-2 h-4 w-4" />
                        Practice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Interview History</h2>
          
          <div className="space-y-4">
            {recentInterviews.map((interview) => (
              <Card key={interview.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{interview.company}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{interview.position}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {new Date(interview.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {interview.time}
                        </span>
                        <Badge variant="outline">
                          {interviewTypes[interview.type]}
                        </Badge>
                      </div>
                      {interview.notes && (
                        <p className="text-sm text-muted-foreground">{interview.notes}</p>
                      )}
                    </div>
                    {interview.outcome && (
                      <Badge 
                        className={
                          interview.outcome === 'passed' 
                            ? 'bg-green-100 text-green-800 border-green-200'
                            : interview.outcome === 'rejected'
                            ? 'bg-red-100 text-red-800 border-red-200'
                            : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                        }
                      >
                        {interview.outcome === 'passed' && <CheckCircle className="mr-1 h-3 w-3" />}
                        {interview.outcome.charAt(0).toUpperCase() + interview.outcome.slice(1)}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="questions" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Practice Questions</h2>
              <p className="text-sm text-muted-foreground">
                {practicedCount} of {questions.length} questions practiced
              </p>
            </div>
            <Dialog open={showQuestionDialog} onOpenChange={setShowQuestionDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Question
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Practice Question</DialogTitle>
                  <DialogDescription>
                    Create a custom interview question to practice
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category*</Label>
                    <Input
                      id="category"
                      value={questionForm.category}
                      onChange={(e) => setQuestionForm(prev => ({ ...prev, category: e.target.value }))}
                      placeholder="e.g. Technical, Behavioral, General"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select value={questionForm.difficulty} onValueChange={(value) => setQuestionForm(prev => ({ ...prev, difficulty: value as PrepQuestion['difficulty'] }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="question">Question*</Label>
                    <Textarea
                      id="question"
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm(prev => ({ ...prev, question: e.target.value }))}
                      placeholder="Enter the interview question..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="answer">Your Answer</Label>
                    <Textarea
                      id="answer"
                      value={questionForm.answer}
                      onChange={(e) => setQuestionForm(prev => ({ ...prev, answer: e.target.value }))}
                      placeholder="Prepare your answer..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleAddQuestion}>Add Question</Button>
                  <Button variant="outline" onClick={() => setShowQuestionDialog(false)}>Cancel</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardContent className="p-0">
              <Accordion type="single" collapsible>
                {filteredQuestions.map((question) => (
                  <AccordionItem key={question.id} value={question.id}>
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-3 text-left">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              togglePracticed(question.id)
                            }}
                            className={question.practiced ? 'text-green-600' : 'text-muted-foreground'}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <span className="font-medium">{question.question}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {question.category}
                          </Badge>
                          <Badge className={getDifficultyColor(question.difficulty)}>
                            {question.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-3">
                        <Label htmlFor={`answer-${question.id}`}>Your Answer:</Label>
                        <Textarea
                          id={`answer-${question.id}`}
                          value={question.answer}
                          onChange={(e) => updateAnswer(question.id, e.target.value)}
                          placeholder="Write your answer here..."
                          className="min-h-[80px]"
                        />
                        {question.practiced && (
                          <div className="flex items-center text-sm text-green-600">
                            <Star className="mr-1 h-4 w-4" />
                            Practiced
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="companies" className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Company Research</h2>
            <p className="text-muted-foreground">
              Research companies and prepare targeted questions
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Research Checklist
                </CardTitle>
                <CardDescription>
                  Essential research areas for each company
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Company mission and values",
                    "Recent news and developments",
                    "Products and services",
                    "Company culture and team",
                    "Growth and funding history",
                    "Competitors and market position",
                    "Leadership and key personnel"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Questions to Ask
                </CardTitle>
                <CardDescription>
                  Smart questions to ask your interviewer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "What does success look like in this role?",
                    "What are the biggest challenges facing the team?",
                    "How do you measure performance?",
                    "What opportunities exist for growth?",
                    "What do you enjoy most about working here?",
                    "What's the company's vision for the next 5 years?",
                    "How does this role contribute to company goals?"
                  ].map((question, index) => (
                    <div key={index} className="text-sm border-l-2 border-muted pl-4 py-1">
                      {question}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}