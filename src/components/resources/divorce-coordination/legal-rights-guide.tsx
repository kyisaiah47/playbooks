"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Download,
  ExternalLink,
  Scale,
  Shield,
  FileText,
  Gavel,
  Eye
} from "lucide-react"

export function LegalRightsGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Legal Rights & Responsibilities Guide</h1>
        <p className="text-xl text-muted-foreground">
          Understanding your rights and obligations during divorce proceedings
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Know Your Rights</Badge>
          <Badge variant="outline">Legal Protection</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Your Fundamental Rights
          </CardTitle>
          <CardDescription>
            Core legal protections available to all divorcing spouses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">Legal Representation</div>
              <p className="text-sm text-muted-foreground">Right to an Attorney</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">Fair Process</div>
              <p className="text-sm text-muted-foreground">Due Process Rights</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">Equal Treatment</div>
              <p className="text-sm text-muted-foreground">Non-Discrimination</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fundamental Legal Rights */}
      <Card>
        <CardHeader>
          <CardTitle>Your Fundamental Legal Rights</CardTitle>
          <CardDescription>Core rights that protect you throughout the divorce process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Legal Representation</h4>
                <p className="text-sm text-muted-foreground">
                  You have the right to hire an attorney or represent yourself. If you cannot afford an attorney, legal aid may be available for certain issues.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Due Process</h4>
                <p className="text-sm text-muted-foreground">
                  You must be properly notified of legal proceedings and given opportunity to respond. Courts must follow established legal procedures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Financial Disclosure</h4>
                <p className="text-sm text-muted-foreground">
                  Your spouse must fully disclose all assets, debts, and income. You have the right to discovery and to verify financial information.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Marital Property</h4>
                <p className="text-sm text-muted-foreground">
                  You have rights to marital property acquired during the marriage, regardless of whose name is on the title.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Privacy</h4>
                <p className="text-sm text-muted-foreground">
                  Communications with your attorney are privileged. You have rights to privacy in certain personal matters during proceedings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Appeal</h4>
                <p className="text-sm text-muted-foreground">
                  If you disagree with a court decision, you generally have the right to appeal to a higher court within specified time limits.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Property Rights */}
      <Card>
        <CardHeader>
          <CardTitle>Property and Financial Rights</CardTitle>
          <CardDescription>Understanding your rights to marital assets and debts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Marital Property Rights</h4>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Community Property States:</strong> Generally 50/50 split of marital property</p>
                <p><strong>Equitable Distribution States:</strong> Fair but not necessarily equal division</p>
                <p><strong>Includes:</strong> Income, real estate, vehicles, investments, retirement accounts</p>
                <p><strong>Exceptions:</strong> Separate property (premarital assets, inheritances, gifts)</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-red-600">Debt Responsibilities</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Marital Debt:</strong> Debt incurred during marriage is typically shared responsibility</p>
                <p><strong>Separate Debt:</strong> Pre-marital debt usually remains individual responsibility</p>
                <p><strong>Credit Protection:</strong> Monitor credit reports and consider freezing joint accounts</p>
                <p><strong>Joint Liability:</strong> You may remain liable for joint debts even after divorce</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parental Rights */}
      <Card>
        <CardHeader>
          <CardTitle>Parental Rights and Responsibilities</CardTitle>
          <CardDescription>Your rights and obligations regarding children</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Parent-Child Relationship</h4>
                <p className="text-sm text-muted-foreground">
                  Both parents have fundamental rights to maintain relationships with their children, absent safety concerns.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Participate in Decisions</h4>
                <p className="text-sm text-muted-foreground">
                  Parents have rights to participate in major decisions about children's health, education, and welfare.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Right to Information</h4>
                <p className="text-sm text-muted-foreground">
                  Non-custodial parents generally have rights to school records, medical information, and updates about the child's welfare.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Responsibility for Support</h4>
                <p className="text-sm text-muted-foreground">
                  Both parents have legal obligations to financially support their children, typically through child support orders.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Protection from Abuse */}
      <Card>
        <CardHeader>
          <CardTitle>Protection from Domestic Violence</CardTitle>
          <CardDescription>Legal protections available if you're experiencing abuse</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Immediate Safety Measures
            </h4>
            <div className="space-y-2 text-sm text-red-700">
              <p>• <strong>Restraining Orders:</strong> Court orders prohibiting contact or proximity</p>
              <p>• <strong>Emergency Custody:</strong> Immediate protection for children in dangerous situations</p>
              <p>• <strong>Exclusive Use Orders:</strong> Right to remain in the family home</p>
              <p>• <strong>Police Protection:</strong> Law enforcement assistance in enforcing orders</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">Types of Protective Orders</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <p><strong>Emergency/Temporary Orders:</strong> Immediate protection, usually 10-14 days</p>
                <p><strong>Preliminary Injunctions:</strong> Protection during divorce proceedings</p>
              </div>
              <div>
                <p><strong>Permanent Restraining Orders:</strong> Long-term protection, often 1-5 years</p>
                <p><strong>Criminal Protective Orders:</strong> Issued in criminal domestic violence cases</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Documentation is Critical</h4>
            <p className="text-sm text-yellow-700">
              Keep detailed records of incidents including dates, times, witnesses, photos of injuries, and police reports. This documentation is essential for obtaining protective orders and proving abuse in court.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Financial Protection Rights */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Protection Rights</CardTitle>
          <CardDescription>Protecting your economic interests during divorce</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2 text-green-600">
                  <Shield className="h-4 w-4" />
                  Automatic Restraining Orders
                </h4>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2 text-sm text-green-700">
                  <p>Many states automatically impose restraining orders when divorce is filed:</p>
                  <p>• Cannot sell, transfer, or hide marital assets</p>
                  <p>• Cannot change insurance beneficiaries</p>
                  <p>• Cannot incur unusual debts</p>
                  <p>• Cannot cancel existing insurance coverage</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2 text-blue-600">
                  <Eye className="h-4 w-4" />
                  Discovery Rights
                </h4>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2 text-sm text-blue-700">
                  <p>You have the right to obtain financial information:</p>
                  <p>• Bank account statements and records</p>
                  <p>• Tax returns and financial documents</p>
                  <p>• Business records and valuations</p>
                  <p>• Depositions of your spouse and witnesses</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2 text-purple-600">
                  <FileText className="h-4 w-4" />
                  Temporary Support Rights
                </h4>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-2 text-sm text-purple-700">
                  <p>Right to request temporary support during divorce:</p>
                  <p>• Temporary spousal support/alimony</p>
                  <p>• Temporary child support</p>
                  <p>• Payment of household expenses</p>
                  <p>• Attorney's fees in some cases</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2 text-orange-600">
                  <Gavel className="h-4 w-4" />
                  Enforcement Rights
                </h4>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-2 text-sm text-orange-700">
                  <p>Rights to enforce court orders:</p>
                  <p>• Contempt of court for violations</p>
                  <p>• Wage garnishment for unpaid support</p>
                  <p>• Asset seizure and liens</p>
                  <p>• Modification of existing orders</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsibilities and Obligations */}
      <Card>
        <CardHeader>
          <CardTitle>Your Legal Responsibilities</CardTitle>
          <CardDescription>Understanding your obligations during the divorce process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Duty of Full Financial Disclosure</h4>
                <p className="text-sm text-muted-foreground">
                  You must fully and honestly disclose all assets, debts, income, and expenses. Hiding assets is illegal and can result in serious penalties.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Compliance with Court Orders</h4>
                <p className="text-sm text-muted-foreground">
                  You must follow all temporary and permanent court orders. Violations can result in contempt of court charges and penalties.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Child Support Obligations</h4>
                <p className="text-sm text-muted-foreground">
                  Child support payments are mandatory and cannot be waived. Non-payment can result in wage garnishment, asset seizure, and even jail time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Preservation of Evidence</h4>
                <p className="text-sm text-muted-foreground">
                  You have a duty to preserve relevant documents and evidence. Destruction of evidence can negatively impact your case.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Acting in Children's Best Interest</h4>
                <p className="text-sm text-muted-foreground">
                  Parents have a duty to act in their children's best interests and not use them as pawns in divorce proceedings.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning Box */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-red-800">Emergency Safety Resources</h4>
            <p className="text-sm text-red-700 mb-3">
              If you are in immediate danger, call 911. For domestic violence support:
            </p>
            <div className="space-y-1 text-sm text-red-700">
              <p>• National Domestic Violence Hotline: 1-800-799-7233</p>
              <p>• Text START to 88788</p>
              <p>• Online chat at thehotline.org</p>
              <p>• Available 24/7 in multiple languages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Legal Strategy Tips
          </CardTitle>
          <CardDescription>Professional guidance for protecting your rights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Know Your State Laws</h4>
              <p className="text-sm text-blue-700">
                Divorce laws vary significantly by state. Research your state's specific laws on property division, custody, and support.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Document Everything</h4>
              <p className="text-sm text-green-700">
                Keep detailed records of all communications, incidents, and financial transactions. Good documentation strengthens your case.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Get Legal Advice Early</h4>
              <p className="text-sm text-purple-700">
                Consult with an attorney as soon as possible, even if you plan to represent yourself. Early advice can prevent costly mistakes.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Understand Your Options</h4>
              <p className="text-sm text-orange-700">
                Learn about alternatives like mediation and collaborative divorce. These can be less expensive and less adversarial than litigation.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Don't Make Threats</h4>
              <p className="text-sm text-red-700">
                Never threaten your spouse or make statements that could be used against you. Keep all communications respectful and factual.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">Plan for the Future</h4>
              <p className="text-sm text-teal-700">
                Think beyond the divorce decree. Consider how decisions will affect you years from now, especially regarding retirement and taxes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Legal Resources and Support</CardTitle>
          <CardDescription>Where to find legal help and information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">State Bar Association Lawyer Referral</h4>
                <p className="text-sm text-muted-foreground">Find qualified attorneys in your area through your state bar</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Legal Aid Services</h4>
                <p className="text-sm text-muted-foreground">Free or low-cost legal assistance for qualifying individuals</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Find Help
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Self-Help Legal Resources</h4>
                <p className="text-sm text-muted-foreground">Court-provided resources for representing yourself</p>
              </div>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Access
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Domestic Violence Legal Help</h4>
                <p className="text-sm text-muted-foreground">Specialized legal assistance for domestic violence survivors</p>
              </div>
              <Button variant="outline" size="sm">
                <Shield className="h-4 w-4 mr-2" />
                Get Help
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Protect Your Legal Rights</CardTitle>
          <CardDescription>Take action to safeguard your interests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Legal Documentation
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Rights Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}