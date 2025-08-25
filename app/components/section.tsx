import { alunos, orientadores } from "@/lib/alunos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap } from "lucide-react";

const AlunoCard = ({ aluno }: { aluno: { nome: string; curso: string } }) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 items-center">
      <CardContent className="p-4 text-center">
        <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
          <User className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="font-semibold text-sm text-gray-900 mb-1 leading-tight">
          {aluno.nome}
        </h3>
        <Badge variant="secondary" className="text-xs p-2">
          {aluno.curso}
        </Badge>
      </CardContent>
    </Card>
  );
};

const OrientadorItem = ({ orientador }: { orientador: { nome: string } }) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="h-10 w-10 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
        <GraduationCap className="h-5 w-5 text-green-600" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-sm text-gray-900">{orientador.nome}</p>
        <p className="text-xs text-gray-500">Orientador</p>
      </div>
    </div>
  );
};

export const Section = () => {
  return (
    <section className="max-w-4xl mx-auto mt-8 space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <User className="h-5 w-5" />
            Alunos
            <Badge variant="outline" className="ml-auto p-4">
              {alunos.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {alunos.map((aluno, idx) => (
              <AlunoCard key={idx} aluno={aluno} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <GraduationCap className="h-5 w-5" />
            Orientador{orientadores.length > 1 ? 'es' : ''}
            <Badge variant="outline" className="ml-auto p-4">
              {orientadores.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {orientadores.map((orientador, idx) => (
            <OrientadorItem key={idx} orientador={orientador} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
};