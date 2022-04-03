import {tfplugin5} from '../generated/client'

interface HasDiagnostics {
  diagnostics: tfplugin5.IDiagnostic[]
}

export function throwDiagnosticErrors<T extends HasDiagnostics>(response: T): T {
  const errors = response.diagnostics.filter(
    (diagnostic) => diagnostic.severity === tfplugin5.Diagnostic.Severity.ERROR,
  )

  if (errors.length > 0) {
    throw new Error(errors.map((error) => error.summary).join('\n\n'))
  }

  return response
}
