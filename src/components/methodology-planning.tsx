"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { 
  Target, Plus, Edit, Trash2, CheckCircle, 
  AlertCircle, Clock, Users, Database, FileText
} from "lucide-react"
import { useResearch } from "@/contexts/research-context"

interface ResearchQuestion {
  id: string
  question: string
  type: 'primary' | 'secondary'
  status: 'draft' | 'refined' | 'approved'
}

interface Hypothesis {
  id: string
  statement: string
  type: 'null' | 'alternative'
  variables: string[]
  testable: boolean
}

interface Variable {
  id: string
  name: string
  type: 'independent' | 'dependent' | 'control' | 'confounding'
  description: string
  measurementLevel: 'nominal' | 'ordinal' | 'interval' | 'ratio'
  operationalDefinition: string
}

export function MethodologyPlanning() {
  const { researchData } = useResearch()
  
  const [researchQuestions, setResearchQuestions] = useState<ResearchQuestion[]>([
    {
      id: '1',
      question: 'How does the implementation of AI tools affect research productivity in academic institutions?',
      type: 'primary',
      status: 'refined'
    },
    {
      id: '2',
      question: 'What are the main barriers to AI adoption in research workflows?',
      type: 'secondary',
      status: 'draft'
    }
  ])

  const [hypotheses, setHypotheses] = useState<Hypothesis[]>([
    {
      id: '1',
      statement: 'AI tools will significantly increase research productivity by 25% or more',
      type: 'alternative',
      variables: ['AI tool usage', 'Research productivity'],
      testable: true
    },
    {
      id: '2',
      statement: 'There is no significant difference in research productivity with AI tool implementation',
      type: 'null',
      variables: ['AI tool usage', 'Research productivity'],
      testable: true
    }
  ])

  const [variables, setVariables] = useState<Variable[]>([
    {
      id: '1',
      name: 'Research Productivity',
      type: 'dependent',
      description: 'Measured by number of publications and research outputs',
      measurementLevel: 'ratio',
      operationalDefinition: 'Number of peer-reviewed publications per researcher per year'
    },
    {
      id: '2',
      name: 'AI Tool Usage',
      type: 'independent',
      description: 'Frequency and type of AI tools used in research',
      measurementLevel: 'ordinal',
      operationalDefinition: 'Scale from 1-5 measuring frequency of AI tool usage'
    }
  ])

  const [newQuestion, setNewQuestion] = useState('')
  const [newHypothesis, setNewHypothesis] = useState('')
  const [newVariable, setNewVariable] = useState<Partial<Variable>>({})

  const addResearchQuestion = () => {
    if (newQuestion.trim()) {
      const question: ResearchQuestion = {
        id: Date.now().toString(),
        question: newQuestion,
        type: 'secondary',
        status: 'draft'
      }
      setResearchQuestions([...researchQuestions, question])
      setNewQuestion('')
    }
  }

  const addHypothesis = () => {
    if (newHypothesis.trim()) {
      const hypothesis: Hypothesis = {
        id: Date.now().toString(),
        statement: newHypothesis,
        type: 'alternative',
        variables: [],
        testable: true
      }
      setHypotheses([...hypotheses, hypothesis])
      setNewHypothesis('')
    }
  }

  const addVariable = () => {
    if (newVariable.name && newVariable.description) {
      const variable: Variable = {
        id: Date.now().toString(),
        name: newVariable.name,
        type: newVariable.type || 'independent',
        description: newVariable.description,
        measurementLevel: newVariable.measurementLevel || 'nominal',
        operationalDefinition: newVariable.operationalDefinition || ''
      }
      setVariables([...variables, variable])
      setNewVariable({})
    }
  }

  const getStatusColor = (status: ResearchQuestion['status']) => {
    switch (status) {
      case 'draft': return 'secondary'
      case 'refined': return 'default'
      case 'approved': return 'outline'
      default: return 'secondary'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'primary': return 'destructive'
      case 'secondary': return 'secondary'
      case 'alternative': return 'default'
      case 'null': return 'outline'
      case 'independent': return 'destructive'
      case 'dependent': return 'default'
      case 'control': return 'secondary'
      case 'confounding': return 'outline'
      default: return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Target className="mr-2 h-8 w-8" />
          Methodology Planning
        </h1>
        <p className="text-muted-foreground mt-1">
          Plan and document your research methodology and approach
        </p>
      </div>

      {/* Research Approach Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Research Approach</CardTitle>
          <CardDescription>Based on your setup wizard responses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-semibold">Selected Methods</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {researchData.methodology.map((method, index) => (
                  <Badge key={index} variant="default">{method}</Badge>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold">Project Type</Label>
              <p className="text-sm text-muted-foreground mt-1">
                {researchData.projectType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Research Questions</span>
            <Button size="sm" onClick={() => {}}>
              <Plus className="mr-2 h-4 w-4" />
              Add Question
            </Button>
          </CardTitle>
          <CardDescription>Define your primary and secondary research questions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {researchQuestions.map((rq) => (
              <div key={rq.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={getTypeColor(rq.type)}>{rq.type}</Badge>
                      <Badge variant={getStatusColor(rq.status)}>{rq.status}</Badge>
                    </div>
                    <p className="text-sm">{rq.question}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2 pt-2">
            <Input
              placeholder="Enter a new research question..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="flex-1"
            />
            <Button onClick={addResearchQuestion} disabled={!newQuestion.trim()}>
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Hypotheses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Hypotheses</span>
            <Button size="sm" onClick={() => {}}>
              <Plus className="mr-2 h-4 w-4" />
              Add Hypothesis
            </Button>
          </CardTitle>
          <CardDescription>Formulate your research hypotheses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {hypotheses.map((hypothesis) => (
              <div key={hypothesis.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={getTypeColor(hypothesis.type)}>
                        {hypothesis.type} hypothesis
                      </Badge>
                      {hypothesis.testable && (
                        <Badge variant="outline">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Testable
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm mb-2">{hypothesis.statement}</p>
                    {hypothesis.variables.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs text-muted-foreground">Variables:</span>
                        {hypothesis.variables.map((variable, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {variable}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            <Input
              placeholder="Enter a new hypothesis..."
              value={newHypothesis}
              onChange={(e) => setNewHypothesis(e.target.value)}
              className="flex-1"
            />
            <Button onClick={addHypothesis} disabled={!newHypothesis.trim()}>
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Variables & Measures</span>
            <Button size="sm" onClick={() => {}}>
              <Plus className="mr-2 h-4 w-4" />
              Add Variable
            </Button>
          </CardTitle>
          <CardDescription>Define and operationalize your research variables</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {variables.map((variable) => (
              <div key={variable.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{variable.name}</h4>
                      <Badge variant={getTypeColor(variable.type)}>
                        {variable.type}
                      </Badge>
                      <Badge variant="outline">{variable.measurementLevel}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {variable.description}
                    </p>
                    {variable.operationalDefinition && (
                      <div className="bg-muted/50 p-2 rounded text-xs">
                        <strong>Operational Definition:</strong> {variable.operationalDefinition}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Study Design Framework */}
      <Card>
        <CardHeader>
          <CardTitle>Study Design Framework</CardTitle>
          <CardDescription>Outline your overall study design and approach</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-semibold">Design Type</Label>
              <Select defaultValue="experimental">
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="experimental">Experimental</SelectItem>
                  <SelectItem value="quasi-experimental">Quasi-Experimental</SelectItem>
                  <SelectItem value="correlational">Correlational</SelectItem>
                  <SelectItem value="descriptive">Descriptive</SelectItem>
                  <SelectItem value="longitudinal">Longitudinal</SelectItem>
                  <SelectItem value="cross-sectional">Cross-Sectional</SelectItem>
                  <SelectItem value="case-study">Case Study</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-semibold">Timeline</Label>
              <div className="mt-2 p-2 bg-muted/50 rounded text-sm">
                {researchData.timeline}
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-semibold">Sample Population</Label>
            <Textarea 
              className="mt-2"
              placeholder="Describe your target population, sampling method, and sample size..."
            />
          </div>

          <div>
            <Label className="text-sm font-semibold">Data Collection Plan</Label>
            <Textarea 
              className="mt-2"
              placeholder="Outline how you will collect data, including instruments, procedures, and timeline..."
            />
          </div>

          <div>
            <Label className="text-sm font-semibold">Analysis Plan</Label>
            <Textarea 
              className="mt-2"
              placeholder="Describe your data analysis approach and statistical methods..."
            />
          </div>
        </CardContent>
      </Card>

      {/* Methodology Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Methodology Checklist</CardTitle>
          <CardDescription>Track completion of methodology planning tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              'Research questions defined',
              'Hypotheses formulated',
              'Variables identified and operationalized',
              'Study design selected',
              'Population and sampling method determined',
              'Data collection instruments selected',
              'Data analysis plan outlined',
              'Ethics approval obtained',
              'Pilot study conducted',
              'Methodology section drafted'
            ].map((task, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`task-${index}`} />
                <Label
                  htmlFor={`task-${index}`}
                  className="text-sm cursor-pointer"
                >
                  {task}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}